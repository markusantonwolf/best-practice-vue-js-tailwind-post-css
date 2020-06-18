module.exports = {
  configureWebpack: {},
  pluginOptions: {},
  publicPath: '/',
  assetsDir: 'assets',
  productionSourceMap: false,
  pwa: {
    name: 'Learning Chinese',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#34495e',
    themeColor: '#34495e',
    msTileColor: '#34495e',
    iconPaths: {
      favicon32: 'assets/img/favicon-32x32.png',
      favicon16: 'assets/img/favicon-16x16.png',
      appleTouchIcon: 'assets/img/apple-touch-icon-152x152.png',
      maskIcon: 'assets/img/safari-pinned-tab.svg',
    },
    manifestOptions: {
      background_color: '#ffffff',
      start_url: '/',
      icons: [
        { src: '/assets/img/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/assets/img/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        {
          src: '/assets/img/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: '/assets/img/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },
}
