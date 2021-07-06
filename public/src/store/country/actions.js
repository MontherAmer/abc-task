import { apis } from "./apis"
import { GET_COUNTRIES } from "./actionTypes"

export const listCountries = () => dispatch => {
  return apis.list().then(res => {
    return res.success
      ? dispatch({ type: GET_COUNTRIES, payload: res.data })
      : console.log("err")
  })
}
