module.exports = {
  devServer: {
    port: 3000, // 端口
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/components/common',
        'content': '@/components/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}