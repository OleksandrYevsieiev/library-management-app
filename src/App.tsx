import React from 'react'
import './App.css'

import { AddStorageForm } from './components/AddStorageForm'
import { EnhancedTable } from './components/ReservationsTable'

export const App = () => {
  return (
    <div className='App'>
      <h1>Add new books to storage here:</h1>
      <AddStorageForm />
      <EnhancedTable />
    </div>
  )
}
