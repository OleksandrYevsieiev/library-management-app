import React from 'react'
import './App.css'
import Typography from '@mui/material/Typography'

import { AddStorageForm } from './components/AddStorageForm'
import { EnhancedTable } from './components/ReservationsTable'
import Supert from './components/tbl'

export const App = () => {
  return (
    <div className='App'>
      <Typography
        sx={{ flex: '1 1 100%', margin: '15px 0' }}
        variant='h4'
        id='tableTitle'
        component='div'
      >
        Add new books to storage
      </Typography>
      <AddStorageForm />
      <EnhancedTable />
      <Supert />
    </div>
  )
}
