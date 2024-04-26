import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from '../reducers/UserSlice'
import rootSagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()
let middleware = [sagaMiddleware]

// eslint-disable-next-line no-underscore-dangle
const initialState = !__SERVER__ ? window.__PRELOADED__STATE__ : {}

const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  composeWithDevTools: __DEVELOPMENT__?true:false,
})

if (__SERVER__) {
  store.runSaga = sagaMiddleware.run
} else {
  sagaMiddleware.run(rootSagas)
}

export default store
