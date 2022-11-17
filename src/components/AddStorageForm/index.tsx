import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const AddStorageForm = () => {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        justifyContent: 'center',
      }}
      noValidate
      autoComplete='off'
    >
      <TextField id='outlined-book-name' label='Book Name' variant='outlined' />
      <TextField id='outlined-description' label='Description' variant='outlined' />
      <TextField id='outlined-storage' label='Storage amount' variant='outlined' type='number' />
      <Button variant='contained'>Submit</Button>
    </Box>
  )
}
