module.exports = {
  //路径前缀
  publicPath: "/",
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    extract: { ignoreOrder: true },
  },
  //开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
  devServer: {
    port: 4396,
    open: true,
    proxy: {
      "/api": {
        changeOrigin: true,
        //本地服务接口地址
        //target: 'http://localhost',
        //远程演示服务地址,可用于直接启动项目
        target: "https://saber.bladex.vip/api",
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
