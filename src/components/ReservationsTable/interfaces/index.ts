export interface Data {
  _id: string
  book_id: string
  user_name: string
  start_date: string
  end_date: string
}

export interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

export interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}

export interface EnhancedTableToolbarProps {
  numSelected: number
}

export type Order = 'asc' | 'desc'

export interface TBodyProps {
  page: number
  selected: readonly string[]
  rowsPerPage: number
  dense: boolean
  setSelected: React.Dispatch<React.SetStateAction<readonly string[]>>
  order: Order
  orderBy: string
}
