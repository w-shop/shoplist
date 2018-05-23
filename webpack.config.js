var Encore = require('@symfony/webpack-encore');
var SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

Encore
    .setOutputPath('dist/')
    .setPublicPath('/dist/')
    .addEntry('app', './src/js/app.js')
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .cleanupOutputBeforeBuild()
    .enableVueLoader()
    .autoProvidejQuery()
    .disableImagesLoader()
    .addLoader({
        test: /\.(png|jpg|jpeg|gif|ico|svg|webp)$/,
        loader: 'file-loader',
        exclude: [/svg\/sprite-main\/.+\.svg$/],
        options: {
            name: 'images/[name].[hash:8].[ext]',
        }
    })
    .addLoader({
        test: /svg\/sprite-main\/.+\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
            extract: true,
            spriteFilename: 'sprite.svg'
        }
    })
    .addPlugin(new SpriteLoaderPlugin({
        plainSprite: true
    }))
    .addPlugin(new HtmlWebpackPlugin())
;

module.exports = Encore.getWebpackConfig();
