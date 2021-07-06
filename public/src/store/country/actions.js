import { apis } from "./apis"
import { GET_COUNTRIES, UPDATE_COUNTRY } from "./actionTypes"

export const listCountriesAction = () => dispatch =>
  apis
    .list()
    .then(res =>
      res.success
        ? dispatch({ type: GET_COUNTRIES, payload: res.data })
        : console.log("err")
    )


export const updateCountryAction = data => dispatch =>
  apis
    .update(data)
    .then(res =>
      res.success
        ? dispatch({ type: UPDATE_COUNTRY, payload: res.data })
        : console.log("err")
    )
