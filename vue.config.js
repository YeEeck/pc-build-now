const { defineConfig } = require("@vue/cli-service")
const CompressionWebpackPlugin = require("compression-webpack-plugin")
module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    configureWebpack: (config) => {
        config.plugins.push(
            new CompressionWebpackPlugin({
                filename: "[path][name].gz",
                test: /\.(js|css)$/i,
            })
        )
    },
})
