import { isPackageExists } from 'local-pkg'
import type { FlatConfigItem, OptionsReact } from '../types'
import { ensurePackages, interopDefault } from '../utils'
import { GLOB_SRC } from '../utils/globs'

const ReactRefreshAllowConstantExportPackages = ['vite']
const RemixPackages = ['@remix-run/node', '@remix-run/react', '@remix-run/serve', '@remix-run/dev']
const ReactRouterPackages = ['@react-router/node', '@react-router/react', '@react-router/serve', '@react-router/dev']
const NextJsPackages = ['next']

export async function react(options: OptionsReact = {}): Promise<FlatConfigItem[]> {
  const { files = [GLOB_SRC], overrides = {} } = options

  await ensurePackages(['eslint-plugin-react', 'eslint-plugin-react-hooks', 'eslint-plugin-react-refresh'])

  const [pluginReact, pluginReactHooks, pluginReactRefresh] = await Promise.all([
    interopDefault(import('eslint-plugin-react')),
    interopDefault(import('eslint-plugin-react-hooks')),
    interopDefault(import('eslint-plugin-react-refresh')),
  ] as const)

  const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some(i => isPackageExists(i))
  const isUsingRemix = RemixPackages.some(i => isPackageExists(i))
  const isUsingReactRouter = ReactRouterPackages.some(i => isPackageExists(i))
  const isUsingNext = NextJsPackages.some(i => isPackageExists(i))

  const reactHooksConfig = pluginReactHooks as any

  return [
    {
      name: 'skyroc/react/setup',
      plugins: {
        'react': pluginReact,
        'react-hooks': pluginReactHooks,
        'react-refresh': pluginReactRefresh,
      },
    },
    {
      files,
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      name: 'skyroc/react/rules',
      rules: {
        // React Hook rules
        'react/hook-use-state': [
          'error',
          {
            allowDestructuredState: true,
          },
        ],
        // recommended rules react-hooks
        'react-hooks/exhaustive-deps': 'warn',

        'react-hooks/rules-of-hooks': 'error',

        'antfu/top-level-function': 'off',

        ...reactHooksConfig.configs.recommended.rules,

        // React JSX rules
        ...pluginReact.configs.recommended.rules,
        'react/destructuring-assignment': ['warn', 'always'],
        'react/jsx-boolean-value': ['warn', 'never'],
        'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
        'react/jsx-closing-tag-location': 'warn',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function', // 命名组件使用函数声明
            unnamedComponents: 'arrow-function', // 匿名组件使用箭头函数
          },
        ],
        'react/jsx-curly-brace-presence': [
          'warn',
          {
            children: 'never',
            propElementValues: 'always',
            props: 'never',
          },
        ],
        'react/jsx-curly-newline': ['warn', { multiline: 'consistent', singleline: 'consistent' }],
        'react/jsx-equals-spacing': ['warn', 'never'],
        'react/jsx-fragments': ['warn', 'syntax'],
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-max-props-per-line': 'warn',
        'react/jsx-newline': ['warn', { allowMultilines: true, prevent: true }],
        'react/jsx-no-constructed-context-values': 'warn',
        'react/jsx-no-leaked-render': ['warn', { validStrategies: ['ternary', 'coerce'] }],
        'react/jsx-no-undef': 'off',
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-one-expression-per-line': [
          'warn',
          {
            allow: 'single-child',
          },
        ],
        'react/jsx-props-no-multi-spaces': 'warn',
        'react/jsx-sort-props': [
          'warn',
          {
            callbacksLast: true,
            ignoreCase: true,
            multiline: 'last',
            shorthandFirst: true,
          },
        ],
        'react/jsx-tag-spacing': ['warn'],
        // react runtime
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true,
          },
        ],
        // React Refresh rules
        'react-refresh/only-export-components': [
          'warn',
          {
            allowConstantExport: isAllowConstantExport,
            allowExportNames: [
              ...(isUsingNext
                ? [
                  'dynamic',
                  'dynamicParams',
                  'revalidate',
                  'fetchCache',
                  'runtime',
                  'preferredRegion',
                  'maxDuration',
                  'config',
                  'generateStaticParams',
                  'metadata',
                  'generateMetadata',
                  'viewport',
                  'generateViewport',
                ]
                : []),
              ...(isUsingRemix || isUsingReactRouter
                ? [
                  'meta',
                  'links',
                  'headers',
                  'loader',
                  'action',
                  'clientLoader',
                  'clientAction',
                  'handle',
                  'shouldRevalidate',
                ]
                : []),
            ],
          },
        ],

        ...overrides,
      },
    },
  ]
}
