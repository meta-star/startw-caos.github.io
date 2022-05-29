const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    pages: {
        index: {
            title: 'caOS Platform',
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        }
    },
    transpileDependencies: true
})
