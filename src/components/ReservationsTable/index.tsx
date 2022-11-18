import * as React from 'react'

import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { EnhancedTableHead } from './common/EnhancedTableHead'
import { TBody } from './common/TBody'
import { EnhancedTableToolbar } from './common/EnhancedTableToolbar'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchReservations } from '../../store/reducers/ActionCreators'
import { Data, Order } from './interfaces'
import { BasicPagination } from './common/Pagination'

export const EnhancedTable = () => {
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof Data>('_id')
  const [selected, setSelected] = React.useState<string[]>([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)

  const { reservations } = useAppSelector((state) => state.reservationReducer)
  const dispatch = useAppDispatch()

  const rowsPerPage = 5

  React.useEffect(() => {
    dispatch(fetchReservations(page, rowsPerPage))
  }, [page])

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = reservations.map((n) => n._id) as string[]

      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage - 1)
  }

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          page={page}
          rowsPerPage={rowsPerPage}
          numSelected={selected.length}
          selected={selected}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <BasicPagination
            defaultPage={0}
            count={reservations.length}
            page={page + 1}
            handleChangePage={handleChangePage}
          />
        </Box>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={reservations.length}
            />
            <TBody
              page={page}
              order={order}
              orderBy={orderBy}
              selected={selected}
              rowsPerPage={rowsPerPage}
              dense={dense}
              setSelected={setSelected}
            />
          </Table>
        </TableContainer>
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label='Dense padding'
      />
    </Box>
  )
}
