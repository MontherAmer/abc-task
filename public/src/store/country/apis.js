import Axios from "axios"

export const apis = {
  list: () => Axios.get("/apis/country"),
  update: data => Axios.put(`/apis/country/${data._id}`, data),
}
