import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'

import BackgroundContainer from './components/BackgroundContainer'
import FormCard from './components/FormCard'
import ErrorStrip from './components/ErrorStrip'
import useApi from './hooks/useApi'
import SendItButton from './components/SendItButton'
import MessageField from './components/MessageField'
import SuccessSnackbar from './components/SuccessSnackbar'

import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'

import { useForm } from 'react-hook-form'

function App() {
  // Handle the open/clsed state of the success notice
  const [snackbar, setSnackbar] = useState(false)
  const openSnackbar = useCallback(() => setSnackbar(true), [setSnackbar])
  const closeSnackbar = useCallback(() => setSnackbar(false), [setSnackbar])

  // Get form state and controllers
  const {
    control,
    handleSubmit,
    setError,
    watch,
    reset,
    formState: { isDirty, isTouched },
  } = useForm({
    defaultValues: {
      message: '',
    },
  })

  // On success, reset the form and show a snackbar
  const handleSuccess = useCallback(() => {
    reset(), openSnackbar()
  }, [reset, openSnackbar])

  // Use a hook to wrap up interaction with the API
  const { apiErrors, post, resetApiErrors, submitting } = useApi({
    onSuccess: handleSuccess,
  })

  // Pop the non-field errors out of the apiErrors dict
  const { nonFieldErrors, ...fieldErrors } = apiErrors

  // Remove outdated API errors on form change, using the Callback version of watch.
  // This is created in a useEffect to clean up subscriptions when dependencies change,
  // avoiding memory leaks.
  React.useEffect(() => {
    const subscription = watch(() => resetApiErrors())
    return () => subscription.unsubscribe()
  }, [watch, resetApiErrors])

  // Update api field errors onto the form state
  useEffect(() => {
    Object.keys(fieldErrors).forEach((key) =>
      setError(key, { type: 'api', message: fieldErrors[key] }),
    )
  }, [fieldErrors, setError])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SuccessSnackbar open={snackbar} onClose={closeSnackbar} />
      <BackgroundContainer
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <FormCard submitting={submitting}>
            <form onSubmit={handleSubmit(post)}>
              <MessageField control={control} />
              <SendItButton type="submit">Send It!</SendItButton>
            </form>
          </FormCard>
        </Box>
        <ErrorStrip message={nonFieldErrors} />
      </BackgroundContainer>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
