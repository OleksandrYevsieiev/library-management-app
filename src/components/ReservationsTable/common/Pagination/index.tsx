import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

interface IBasicPagination {
  count: number
  defaultPage: number
  page: number
  handleChangePage: any
}

export const BasicPagination = (props: IBasicPagination) => {
  const { count, defaultPage, page, handleChangePage } = props
  return (
    <Stack spacing={2}>
      <Pagination
        defaultPage={defaultPage}
        count={count}
        page={page}
        onChange={handleChangePage}
        showFirstButton
        showLastButton
      />
    </Stack>
  )
}
