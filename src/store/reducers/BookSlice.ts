import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBook } from '../../models/IBook'

interface BooksState {
  books: IBook[]
  isLoading: boolean
  error: string
}

const initialState: BooksState = {
  books: [],
  isLoading: false,
  error: '',
}

export const booksSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    booksFetching(state) {
      state.isLoading = true
    },
    booksFetchingSuccess(state, action: PayloadAction<IBook[]>) {
      state.isLoading = false
      state.error = ''
      state.books = action.payload
    },
    booksFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default booksSlice.reducer
