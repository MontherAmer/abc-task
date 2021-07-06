import Axios from "axios"

export const apis = {
  create: data => Axios.post(`/apis/country`,data),
  list: () => Axios.get("/apis/country"),
  update: data => Axios.put(`/apis/country/${data._id}`, data),
  delete: data => Axios.delete(`/apis/country/${data}`),
}
