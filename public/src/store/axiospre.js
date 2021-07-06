import Axios from "axios"

export const preStartApisFunction = () => {
  try {
    if (Axios.defaults.baseURL === "/") return
    Axios.defaults.baseURL = "/"
    Axios.interceptors.request.use(async config => {
      // * show loader for each api request
      // * handle form data
      if (config.data instanceof FormData) {
        Object.assign(config.headers)
        config.headers = { ...config.headers }
      } else {
        // * handle other requests
        let data = {
          ...config.data,
        }
        config.data = data
        config.headers = { ...config.headers }
      }
      return config
    })
    // * filter data from response
    Axios.interceptors.response.use(
      response => {
        // * hide loader after request
        return response.data
      },
      error => {
        // * hide loader after request
        console.log(error)
        return Promise.reject(error)
      }
    )
  } catch (err) {
    console.log(err)
  }
}
