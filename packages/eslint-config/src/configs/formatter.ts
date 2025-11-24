import type { FlatConfigItem, Options, PartialPrettierExtendedOptions, PrettierParser } from '../types'
import { ensurePackages, interopDefault } from '../utils'
import {
  GLOB_CSS,
  GLOB_HTML,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_JSONC,
  GLOB_LESS,
  GLOB_POSTCSS,
  GLOB_SCSS,
  GLOB_TOML,
  GLOB_YAML,
} from '../utils/globs'

export async function createFormatterConfig(
  options?: Options['formatter'],
  prettierRules: PartialPrettierExtendedOptions = {},
) {
  const { css = true, html = true, json = true, toml, yaml } = options || {}

  const [pluginPrettier, parserPlain] = await Promise.all([
    interopDefault(import('eslint-plugin-prettier')),
    interopDefault(import('eslint-parser-plain')),
  ])

  function createPrettierFormatter(files: string[], parser: PrettierParser, plugins?: string[]) {
    const rules: PartialPrettierExtendedOptions = {
      ...prettierRules,
      parser,
    }

    if (plugins?.length) {
      rules.plugins = [...(rules.plugins || []), ...plugins]
    }

    const config: FlatConfigItem = {
      files,
      languageOptions: {
        parser: parserPlain,
      },
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        'prettier/prettier': ['warn', rules],
      },
    }

    return config
  }

  const configs: FlatConfigItem[] = []

  if (css) {
    const cssConfig = createPrettierFormatter([GLOB_CSS, GLOB_POSTCSS], 'css')
    const scssConfig = createPrettierFormatter([GLOB_SCSS], 'scss')
    const lessConfig = createPrettierFormatter([GLOB_LESS], 'less')

    configs.push(cssConfig, scssConfig, lessConfig)
  }

  if (html) {
    const htmlConfig = createPrettierFormatter([GLOB_HTML], 'html')
    configs.push(htmlConfig)
  }

  if (json) {
    const jsonConfig = createPrettierFormatter([GLOB_JSON, GLOB_JSONC], 'json', ['prettier-plugin-json-sort'])
    const json5Config = createPrettierFormatter([GLOB_JSON5], 'json5')
    configs.push(jsonConfig, json5Config)
  }

  if (yaml) {
    const yamlConfig = createPrettierFormatter([GLOB_YAML], 'yaml')
    configs.push(yamlConfig)
  }

  if (toml) {
    await ensurePackages(['@toml-tools/parser', 'prettier-plugin-toml'])

    const tomlConfig = createPrettierFormatter([GLOB_TOML], 'toml', ['prettier-plugin-toml'])

    configs.push(tomlConfig)
  }

  return configs
}
