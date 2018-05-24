var Encore = require('@symfony/webpack-encore');
var SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

Encore
    .setOutputPath('dist/')
    .setPublicPath('/')
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
        exclude: [/svg\/sprite\/.+\.svg$/],
        options: {
            name: 'images/[name].[hash:8].[ext]',
        }
    })
    .addLoader({
        test: /svg\/sprite\/.+\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
            extract: true,
            spriteFilename: 'images/sprite.svg'
        }
    })
    .addPlugin(new SpriteLoaderPlugin({
        plainSprite: true
    }))
    .addPlugin(new HtmlWebpackPlugin({
        title: 'Shop List',
        template: 'src/templates/index.html'
    }))
;

module.exports = Encore.getWebpackConfig();
