import { createSlice } from '@reduxjs/toolkit'
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
  reducers: {},
})

export default booksSlice.reducer
