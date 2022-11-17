export interface Data {
  reservationId: string
  bookId: string
  bookName: string
  userName: string
  startTime: string
  endTime: string
}

export type Order = 'asc' | 'desc'

export interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}

export interface EnhancedTableToolbarProps {
  numSelected: number
}

export interface TBodyProps {
  page: number
  selected: readonly string[]
  rowsPerPage: number
  order: Order
  orderBy: keyof Data
  dense: boolean
  setSelected: React.Dispatch<React.SetStateAction<readonly string[]>>
}
