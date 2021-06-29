import axios from 'axios'

axios.defaults.baseURL = 'https://kletchdev.keyleadhealth.com:9090/'

const Request = axios.create()

Request.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { Request }
