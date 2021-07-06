import { GET_COUNTRIES } from "./actionTypes"

const initialState = { countries: [] }

const countries = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload }
    default:
      return state
  }
}

export default countries
