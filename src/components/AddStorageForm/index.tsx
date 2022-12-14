import React from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { useAppDispatch } from '../../hooks/redux'
import { addBooks } from '../../store/reducers/ActionCreators'

interface IFormInput {
  title: string
  description: string
  count: number
}

export const AddStorageForm = () => {
  const { handleSubmit, control } = useForm<IFormInput>()
  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    dispatch(addBooks(data))
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        justifyContent: 'center',
      }}
      autoComplete='off'
    >
      <Controller
        name={'title'}
        control={control}
        rules={{ required: 'Book Name is required' }}
        defaultValue=''
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            id='outlined-book-name'
            label='Book Name'
            variant='outlined'
            onChange={onChange}
            value={value}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Controller
        name={'description'}
        control={control}
        rules={{ required: 'Description is required' }}
        defaultValue=''
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            id='outlined-description'
            label='Description'
            variant='outlined'
            onChange={onChange}
            value={value}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Controller
        name={'count'}
        control={control}
        rules={{
          required: 'Count should be positive',
          min: {
            message: 'Let us add at least one',
            value: 1,
          },
          max: {
            message: 'Try less than 99',
            value: 99,
          },
        }}
        defaultValue={1}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            id='outlined-storage'
            label='Storage amount'
            variant='outlined'
            type='number'
            onChange={onChange}
            value={value}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <div>
        <Button variant='contained' type='submit'>
          Submit
        </Button>
      </div>
    </Box>
  )
}
