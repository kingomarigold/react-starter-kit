import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../reducers/UserSlice'
import rootSagas from '../../sagas'

const sagaMiddleware = createSagaMiddleware()
let middleware = [sagaMiddleware]


export const rootReducer = {
  user: userReducer
}

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
     composeWithDevTools: true,
    preloadedState
  })
}

const store = setupStore()

sagaMiddleware.run(rootSagas)
  
export default store
