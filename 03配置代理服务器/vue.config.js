const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/atguigu': ''},
        ws: true,
        changeOrigin: false
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/demo': '' },
        ws: true,
        changeOrigin: true
      }
    }
  }
})
