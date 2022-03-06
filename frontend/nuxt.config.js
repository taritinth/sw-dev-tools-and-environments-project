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
    // ...
    // 'quill/dist/quill.core.css',
    // // for snow theme
    // 'quill/dist/quill.snow.css',
    // // for bubble theme
    // 'quill/dist/quill.bubble.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuelidate', ssr: true },
    { src: '~plugins/nuxt-quill-plugin', ssr: false },
    // { src: '~plugins/flowbite', ssr: false },
    // { src: '~plugins/datepicker', ssr: false },
    // { src: '~/plugins/quill-editor.js', mode: 'client' },
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
            url: '/auth/signin',
            method: 'post',
            propertyName: 'user.token',
          },
          user: { url: '/auth/me', method: 'get', propertyName: '' },
          logout: false,
        },
      },
      // tokenName: 'Authorization'
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
        ? 'http://18.140.121.44:8080/api'
        : 'http://localhost:8080/api',
    withCredentials: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // parallel: true,
    // cache: true,
    // hardSource: true,
  },
}
