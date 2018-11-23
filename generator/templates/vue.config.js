const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin'); //缩减安装包的大小
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    chainWebpack: config => {
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule.use('svg-sprite-loader').loader('svg-sprite-loader');
    },
    configureWebpack: {
        resolve: {
            alias: {
                '~': path.resolve(__dirname),
            }
        },
        plugins: [
            // new BundleAnalyzerPlugin(),
            new LodashModuleReplacementPlugin()
        ],
    },
    devServer: {
        proxy: '',
        disableHostCheck: true

    },
    css: {
        loaderOptions: {
            "sass": {
                data: `@import "@/assets/scss/_variable.scss";`
            }
        }
    },
    baseUrl: '/',
    assetsDir: 'static'
};