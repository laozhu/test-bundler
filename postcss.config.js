module.exports = {
  plugins: [
    'postcss-import',
    'postcss-normalize',
    [
      'postcss-preset-env',
      {
        stage: 1,
      },
    ],
  ],
};
