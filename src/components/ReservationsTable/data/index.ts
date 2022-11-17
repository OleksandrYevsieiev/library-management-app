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
  userName: string,
  startTime: string,
  endTime: string,
): Data => {
  return {
    reservationId,
    bookId,
    userName,
    startTime,
    endTime,
  }
}

export const rows = [
  createData(
    'a1f4',
    '1b',
    'John Doe',
    'November 17th 2022, 1:29:27 am',
    'November 27th 2022, 1:29:27 am',
  ),
  createData(
    'b5d3',
    '2a',
    'Good Person',
    'November 17th 2022, 1:29:27 am',
    'November 27th 2022, 1:29:27 am',
  ),
  createData(
    'da78',
    '2a',
    'Avid Reader',
    'November 17th 2022, 1:29:27 am',
    'November 27th 2022, 1:29:27 am',
  ),
  createData(
    'mn91',
    '3d',
    'Mike Smith',
    'November 17th 2022, 1:29:27 am',
    'November 27th 2022, 1:29:27 am',
  ),
]
