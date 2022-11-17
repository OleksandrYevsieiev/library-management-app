import axiosInstance from '../../config/axios'
import { IBook } from '../../models/IBook'
import { IReservation } from '../../models/IReservation'
import { AppDispatch } from '../store'
import { booksSlice } from './BookSlice'
import { reservationSlice } from './ReservationSlice'

export const addBooks = (data: IBook) => async (dispatch: AppDispatch) => {
  try {
    dispatch(booksSlice.actions.booksAdding())

    const result = await axiosInstance.post('api/books/store', data)
    if (result?.status === 201) alert('You have sucessfully added a book to storage!')
    dispatch(booksSlice.actions.booksAddingSuccess(result.data))
  } catch (e: any) {
    dispatch(booksSlice.actions.booksAddingError(e.message))
    alert('Something went wrong. Probably a non unique title name?')
  }
}

export const fetchBooks = (page: number, rowsPerPage: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(booksSlice.actions.booksFetching())

    const response = await axiosInstance.get<IBook[]>(`api/books?page=${page}&limit=${rowsPerPage}`)

    dispatch(booksSlice.actions.booksFetchingSuccess(response.data))
  } catch (e: any) {
    dispatch(booksSlice.actions.booksFetchingError(e.message))
  }
}

export const fetchReservations =
  (page: number, rowsPerPage: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(reservationSlice.actions.reservFetching())

      const response = await axiosInstance.get<IReservation[]>(
        `api/books/reservation?page=${page}&limit=${rowsPerPage}`,
      )

      dispatch(reservationSlice.actions.reservFetchingSuccess(response.data))
    } catch (e: any) {
      dispatch(reservationSlice.actions.reservFetchingError(e.message))
    }
  }
