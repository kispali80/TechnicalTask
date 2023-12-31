const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.paths.json');

module.exports = {
    webpack: {
        alias: {
            "~atoms": path.resolve(__dirname, 'src/components/atoms'),
            "~molecules": path.resolve(__dirname, 'src/components/molecules'),
            "~organisms": path.resolve(__dirname, 'src/components/organisms'),
            "~types": path.resolve(__dirname, 'src/types'),
            "~app": path.resolve(__dirname, 'src/app'),
            "~utils": path.resolve(__dirname, 'src/utils'),
            "~constants": path.resolve(__dirname, 'src/constants'),
            "~layout": path.resolve(__dirname, 'src/layout'),
            "~mocks": path.resolve(__dirname, 'src/mocks')
        },
    },
    jest: {
        configure: {
            preset: 'ts-jest',
            moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
                prefix: '<rootDir>',
            }),
        },
    },
};
