export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt 京东商城',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  ** 设置进度条
  */
  // loading: { color: '#fff', height: '10px' },
  // 禁用进度条
  loading: false,
  /*
  ** Global CSS
  ** 全局样式文件
  */
  css: [
    'assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // 注册element  指定前端执行
    { src: '~/plugins/elementui', mode: 'client' },
    // 注册axios(获取令牌)  指定浏览器执行
    { src: '~/plugins/axios', mode: 'client' },
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  // 配置 auth 模块
  auth: {
    strategies: {
      local: {
        endpoints: {
          // 登录    propertyName:接口返回令牌时的字段名
          login: { url: '/login', method: 'post', propertyName: 'data.token' },
          // 退出
          logout: { url: '/logout', method: 'post' },
          // 获取用户信息
          user: { url: '/userinfo', method: 'get', propertyName: 'data' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
        // autoFetchUser: true
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // -------------------使用假数据必须配置基地址-------------------
    baseURL: 'https://www.studyinghome.com/mock/5e6cb126e728b43489c68f9d/api/qz34'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
}