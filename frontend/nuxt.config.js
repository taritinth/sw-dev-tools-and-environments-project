export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'JobJab',
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'font-sans bg-jobjab',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/css/custom.css', lang: 'css' },
    { src: '~/assets/quill.css', lang: 'css' },
    { src: '~/assets/css/flowbite.css', lang: 'css' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuelidate', ssr: true },
    { src: '~plugins/nuxt-quill-plugin', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'vue2-editor/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    // 'vue-toastification/nuxt',

    // You can also pass plugin options
    [
      'vue-toastification/nuxt',
      {
        timeout: 2500,
        draggable: false,
        position: 'bottom-left',
      },
    ],
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/signin',
            method: 'post',
            propertyName: 'user.token',
          },
          user: { url: '/api/auth/me', method: 'get', propertyName: '' },
          logout: false,
        },
      },
      // tokenName: 'Authorization',
    },
    redirect: {
      login: '/signin',
      logout: '/',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'http://159.223.45.216:9999'
        : 'http://localhost:8081',
    withCredentials: true,
    // proxy: true, // Can be also an object with default options
  },

  // proxy: {
  //   '/api/': 'http://localhost:8080',
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // parallel: true,
    // cache: true,
    // hardSource: true,
  },
}
