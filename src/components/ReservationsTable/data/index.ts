import { Data, HeadCell } from '../interfaces'

export const headCells: readonly HeadCell[] = [
  {
    id: 'reservationId',
    numeric: false,
    disablePadding: true,
    label: 'Reservation ID',
  },
  {
    id: 'bookId',
    numeric: true,
    disablePadding: false,
    label: 'Book ID',
  },
  {
    id: 'bookName',
    numeric: true,
    disablePadding: false,
    label: 'Book Name',
  },
  {
    id: 'userName',
    numeric: true,
    disablePadding: false,
    label: 'User Name',
  },
  {
    id: 'startTime',
    numeric: true,
    disablePadding: false,
    label: 'Start of Rent',
  },
  {
    id: 'endTime',
    numeric: true,
    disablePadding: false,
    label: 'End of Rent',
  },
]

export const createData = (
  reservationId: string,
  bookId: string,
  bookName: string,
  userName: string,
  startTime: string,
  endTime: string,
): Data => {
  return {
    reservationId,
    bookId,
    bookName,
    userName,
    startTime,
    endTime,
  }
}

export const rows = [
  createData(
    'a1f4',
    '1b',
    'JS for Dummies',
    'John Doe',
    'November 17th 2022, 1:29:27 am',
    'November 27th 2022, 1:29:27 am',
  ),
  createData(
    'b5d3',
    '2a',
    'Sunny Land',
    'Good Person',
    'November 17th 2022, 1:29:27 am',
    'November 27th 2022, 1:29:27 am',
  ),
  createData(
    'da78',
    '2a',
    'Sunny Land',
    'Avid Reader',
    'November 17th 2022, 1:29:27 am',
    'November 27th 2022, 1:29:27 am',
  ),
  createData(
    'mn91',
    '3d',
    // eslint-disable-next-line quotes
    "World's Atlas",
    'Mike Smith',
    'November 17th 2022, 1:29:27 am',
    'November 27th 2022, 1:29:27 am',
  ),
]
