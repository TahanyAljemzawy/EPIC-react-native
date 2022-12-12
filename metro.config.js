/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// Change 1 (import the blacklist utility)
const blacklist = require('metro-config/src/defaults/exclusionList');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    // Change 2 (add 'bin' to assetExts)
    assetExts: ['bin', 'txt', 'jpg','png'],
    // Change 3 (add platform_node to blacklist)
   blacklistRE: blacklist([/platform_node/])
  },
};

/*
const blacklist = require('metro-config/src/defaults/exclusionList');

// get defaults assetExts array
const defaultAssetExts = require('metro-config/src/defaults/defaults').assetExts;

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: [...defaultAssetExts, 'bin'],
    blacklistRE: blacklist([/platform_node/]),
  },
};
*/