import * as React from 'react'
import TablePagination from '@mui/material/TablePagination'

interface IPagination {
  page: number
  rowsPerPage: number
  handleChangePage: any
  handleChangeRowsPerPage: any
}
export const Pagination = (props: IPagination) => {
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = props

  return (
    <TablePagination
      component='div'
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  )
}
