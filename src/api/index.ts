import axiosInstance from '../config/axios'
import { IBook } from '../models/IBook'

export const addBook = async (data: IBook) => {
  try {
    const result = await axiosInstance.post('api/books/store', data)
    if (result?.status === 201) alert('You have sucessfully added a book to storage!')
  } catch (e) {
    console.error(e)
    alert('Something went wrong. Probably a non unique title name?')
  }
}
