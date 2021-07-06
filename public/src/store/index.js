import { createStore, applyMiddleware, compose } from "redux"
import ReduxThunk from 'redux-thunk';

import createSagaMiddleware from "redux-saga"

import rootReducer from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk,sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store
