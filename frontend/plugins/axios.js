import axios from 'axios'
const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'http://159.223.45.216:9999'
      : 'http://localhost:8081',
})

const getToken = function () {
  if (process.server) {
    // nuxt process in server side
    return
  }
  if (window.$nuxt) {
    return window.$nuxt.$auth.getToken('local')
  }
}

// const CancelToken = axios.CancelToken
// let cancel

instance.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = token
    }

    // if (cancel) {
    //   cancel()
    // }
    // config.cancelToken = new CancelToken(function executor(c) {
    //   // An executor function receives a cancel function as a parameter
    //   cancel = c
    // })

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    try {
      if (axios.isCancel(error)) {
        return new Promise(() => {})
      }
      return Promise.reject(error)
    } catch (error) {
      console.log(error)
    }
  }
)

export { instance as axios }
