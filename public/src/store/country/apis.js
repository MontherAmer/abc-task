import Axios from 'axios'

export const apis = {
  list: () => Axios.get("/apis/country"),
}
