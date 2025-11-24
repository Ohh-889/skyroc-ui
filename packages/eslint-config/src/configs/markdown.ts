import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors'
import * as parserMdx from 'eslint-mdx'
import type { FlatConfigItem, OptionsComponentExts, OptionsFiles, OptionsOverrides } from '../types'
import { interopDefault, parserPlain } from '../utils'
import { GLOB_MARKDOWN, GLOB_MARKDOWN_CODE, GLOB_MARKDOWN_IN_MARKDOWN } from '../utils/globs'
export async function markdown(
  options: OptionsFiles & OptionsComponentExts & OptionsOverrides = {},
): Promise<FlatConfigItem[]> {
  const {
    componentExts = [],
    overrides = {},
  } = options

  // markdown (.md)
  const markdownPlugin = await interopDefault(import('@eslint/markdown'))

  // mdx (.mdx)
  const mdxPlugin = await interopDefault(import('eslint-plugin-mdx'))

  return [

    //
    // -------------------------------
    // 1) plugin 注册
    // -------------------------------
    //
    {
      name: 'skyroc/markdown/setup',
      plugins: {
        markdown: markdownPlugin,
        mdx: mdxPlugin,
      },
    },

    //
    // -------------------------------
    // 2) Markdown (.md) 处理器
    // -------------------------------
    //
    {
      name: 'skyroc/markdown/processor-md',
      files: ['**/*.md'],
      ignores: [GLOB_MARKDOWN_IN_MARKDOWN],
      processor: mergeProcessors([markdownPlugin.processors!.markdown, processorPassThrough]),
      languageOptions: {
        parser: parserPlain, // Markdown 本体不解析 JS，只检查代码块
      },
    },

    //
    // -------------------------------
    // 3) MDX parser + processor
    // -------------------------------
    //
    {
      name: 'skyroc/markdown/mdx',
      files: ['**/*.mdx'],
      processor: mdxPlugin.processors!.remark,
      languageOptions: {
        parser: parserMdx, // ← 🔥 MDX 解析器（最关键）
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
      },
    },

    //
    // -------------------------------
    // 4) Markdown 中代码块的 JS/TS 设置
    // -------------------------------
    //
    {
      name: 'skyroc/markdown/code-blocks',
      files: [GLOB_MARKDOWN_CODE, ...componentExts.map(ext => `${GLOB_MARKDOWN}/**/*.${ext}`)],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: { impliedStrict: true },
        },
      },
      rules: {
        // 这里全部禁用，否则代码块里的示例会被当成真实业务代码 lint
        'antfu/no-top-level-await': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-labels': 'off',
        'no-lone-blocks': 'off',
        'no-restricted-syntax': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-labels': 'off',
        'no-unused-vars': 'off',

        'node/prefer-global/process': 'off',
        'style/comma-dangle': 'off',
        'style/eol-last': 'off',
        'style/padding-line-between-statements': 'off',

        'ts/consistent-type-imports': 'off',
        'ts/explicit-function-return-type': 'off',
        'ts/no-namespace': 'off',
        'ts/no-redeclare': 'off',
        'ts/no-require-imports': 'off',
        'ts/no-unused-expressions': 'off',
        'ts/no-unused-vars': 'off',
        'ts/no-use-before-define': 'off',

        'unicode-bom': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',

        ...overrides,
      },
    },
  ]
}
