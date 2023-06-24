import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

/**:
 * Interceptors help intercept requests or responses
 * before they are handled by `then` or `catch`.
 **/
instance.interceptors.request.use(
  (config) => {
    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

export default instance
