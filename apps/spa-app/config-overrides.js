const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addWebpackAlias,
    addBabelPlugins,
    addLessLoader,
    addPostcssPlugins,
    adjustStyleLoaders,
    removeModuleScopePlugin,
    useBabelRc,
    babelInclude,
} = require('customize-cra');

const path = require('path');

const ignoreSourceMapWarning = () => (config) => {
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
};

module.exports = override(
    // enable alias
    addWebpackAlias({
        // _common: path.resolve(process.cwd(), '../_common'),
        // proto_bundle: path.resolve(process.cwd(), '../proto_bundle'),
        // '@': path.resolve(process.cwd(), 'src')
    }),

    ignoreSourceMapWarning(),
    removeModuleScopePlugin(),
    babelInclude([
        // path.resolve(process.cwd(), '../_common'),
        path.resolve(process.cwd(), './src'),
        path.resolve(process.cwd(), './node_modules/ui'),
        path.resolve(process.cwd(), '../../packages/ui'),
    ]),

);
