import { HeadCell } from '../interfaces'

export const headCells: readonly HeadCell[] = [
  {
    id: '_id',
    numeric: false,
    disablePadding: true,
    label: 'Reservation ID',
  },
  {
    id: 'book_id',
    numeric: true,
    disablePadding: false,
    label: 'Book ID',
  },
  {
    id: 'user_name',
    numeric: true,
    disablePadding: false,
    label: 'User Name',
  },
  {
    id: 'start_date',
    numeric: true,
    disablePadding: false,
    label: 'Start of Rent',
  },
  {
    id: 'end_date',
    numeric: true,
    disablePadding: false,
    label: 'End of Rent',
  },
]
