module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['import-graphql'],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: false,
          verbose: false,
        },
      ],
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@api': './src/api',
            '@assets': './src/assets',
            '@components': './src/components',
            '@config': './src/config',
            '@context': './src/context',
            '@core': './src/core',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@types': './src/types',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
