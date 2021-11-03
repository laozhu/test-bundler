/**
 * @type {import("@babel/core").TransformOptions}
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        bugfixes: true,
        loose: true,
        useBuiltIns: false,
      },
    ],
    [
      '@babel/preset-react',
      {
        development: process.env.NODE_ENV !== 'production',
        runtime: 'automatic',
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allowDeclareFields: true,
        allowNamespaces: true,
        onlyRemoveTypeImports: true,
        optimizeConstEnums: true,
      },
    ],
  ],
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          '@babel/plugin-transform-react-constant-elements',
          '@babel/plugin-transform-react-inline-elements',
          '@babel/plugin-transform-runtime',
        ]
      : ['react-refresh/babel'],
};
