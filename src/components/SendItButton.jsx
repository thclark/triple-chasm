import React from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const SendItButton = ({ ...rest }) => {
  return (
    <Button
      fullWidth
      sx={{
        mt: 3,
        mb: 1,
        color: '#ffffff',
        background: (theme) =>
          `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.light} 90%)`,
      }}
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      {...rest}
    >
      Send It!
    </Button>
  )
}

export default SendItButton
