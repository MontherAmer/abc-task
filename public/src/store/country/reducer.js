import {
  GET_COUNTRIES,
  UPDATE_COUNTRY,
  DELETE_COUNTRY,
  CREATE_COUNTRY,
} from "./actionTypes"

const initialState = { countries: [] }

const countries = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload }
    case UPDATE_COUNTRY:
      return {
        ...state,
        countries: state.countries.map(item =>
          item._id === payload._id ? payload : item
        ),
      }
    case DELETE_COUNTRY:
      return {
        ...state,
        countries: state.countries.filter(item => item._id !== payload),
      }

    case CREATE_COUNTRY:
      return {
        ...state,
        countries: state.countries.concat(payload),
      }
    default:
      return state
  }
}

export default countries
