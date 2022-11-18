import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IReservation } from '../../models/IReservation'

interface ReservationState {
  reservations: IReservation[]
  isLoading: boolean
  error: string
}

const initialState: ReservationState = {
  reservations: [],
  isLoading: false,
  error: '',
}

export const reservationSlice = createSlice({
  name: 'Reservations',
  initialState,
  reducers: {
    reservFetching(state) {
      state.isLoading = true
    },
    reservFetchingSuccess(state, action: PayloadAction<IReservation[]>) {
      state.isLoading = false
      state.error = ''
      state.reservations = action.payload
    },
    reservFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },

    oneReservDeleting(state) {
      state.isLoading = true
    },
    oneReservDeletingSuccess(state, action: PayloadAction<string[]>) {
      state.isLoading = false
      state.error = ''
      state.reservations = state.reservations.filter(
        (reservation) => action.payload.indexOf(reservation._id as string) === -1,
      )
    },
    oneReserveDeletingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default reservationSlice.reducer
