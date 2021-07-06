import { apis } from "./apis"
import {
  GET_COUNTRIES,
  UPDATE_COUNTRY,
  DELETE_COUNTRY,
  CREATE_COUNTRY,
} from "./actionTypes"

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

export const deleteCountryAction = data => dispatch =>
  apis
    .delete(data)
    .then(res =>
      res.success
        ? dispatch({ type: DELETE_COUNTRY, payload: res.data })
        : console.log("err")
    )

export const createCountryAction = data => dispatch => {
  const formData = new FormData()

  for (let key in data) formData.append(key, data[key])

  return apis
    .create(formData)
    .then(res =>
      res.success
        ? dispatch({ type: CREATE_COUNTRY, payload: res.data })
        : console.log(err)
    )
}
