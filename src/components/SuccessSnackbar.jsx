import React from 'react'
import Stack from '@mui/material/Stack'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const SuccessSnackbar = ({ open, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    onClose()
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            width: '100%',
          }}
        >
          Yeah! Message Received 😎
        </Alert>
      </Snackbar>
    </Stack>
  )
}

export default SuccessSnackbar
