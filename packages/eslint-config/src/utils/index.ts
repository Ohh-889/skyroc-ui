import { installPackage } from '@antfu/install-pkg'
import { isPackageExists } from 'local-pkg'

export async function interopDefault<T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m
  return (resolved as any).default || resolved
}

export async function ensurePackages(packages: string[]) {
  if (process.env.CI || process.stdout.isTTY === false)
    return

  const nonExistingPackages = packages.filter(i => !isPackageExists(i))
  if (nonExistingPackages.length === 0)
    return

  const { default: prompts } = await import('prompts')

  const message = `${
    nonExistingPackages.length === 1 ? 'Package is' : 'Packages are'
  } required for this config: ${nonExistingPackages.join(', ')}. Do you want to install them?`

  const { result } = await prompts([
    {
      message,
      name: 'result',
      type: 'confirm',
    },
  ])

  if (result) {
    await installPackage(nonExistingPackages, { dev: true })
  }
}

export const parserPlain = {
  meta: {
    name: 'parser-plain',
  },
  parseForESLint: (code: string) => ({
    ast: {
      body: [],
      comments: [],
      loc: { end: code.length, start: 0 },
      range: [0, code.length],
      tokens: [],
      type: 'Program',
    },
    scopeManager: null,
    services: { isPlain: true },
    visitorKeys: {
      Program: [],
    },
  }),
}

export function renameRules(rules: Record<string, any>, map: Record<string, string>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      for (const [from, to] of Object.entries(map)) {
        if (key.startsWith(`${from}/`))
          return [to + key.slice(from.length), value]
      }
      return [key, value]
    }),
  )
}

type Awaitable<T> = T | Promise<T>
