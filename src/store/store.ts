import { combineReducers, configureStore } from '@reduxjs/toolkit'
import booksReducer from './reducers/BookSlice'
import reservationReducer from './reducers/ReservationSlice'

const rootReducer = combineReducers({
  booksReducer,
  reservationReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
