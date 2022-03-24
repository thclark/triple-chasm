import React, { useEffect, useCallback } from 'react'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'
import ErrorIcon from '@mui/icons-material/Error'

const RippedDiv = styled('div')({
  clipPath:
    'polygon(66.7% 13.91%, 64.31% 12.29%, 61.93% 5.84%, 59.09% 16.32%, 57.39% 13.91%, 54.99% 2.46%, 53.3% 10.68%, 49.49% 8.4%, 46.45% 12.55%, 43.88% 17.13%, 40.93% 6.86%, 38.32% 14.71%, 34.8% 12.05%, 32.19% 12.35%, 31.17% 8.4%, 30.03% 15.52%, 26.97% 15.52%, 23.22% 9.07%, 19.25% 17.13%, 15.07% 14.95%, 12.21% 20.36%, 10.75% 13.94%, 7.9% 15.52%, 5.26% 10.47%, 3.47% 13.91%, 00% 7.46%, 0% 100%, 100% 100%, 100.5% 5.04%, 98.49% 4.18%, 94.85% 9.87%, 91.55% 7.08%, 89.28% 12.29%, 86.91% 9.02%, 85.2% 5.84%, 82.93% 10.68%, 80.55% 6.16%, 78.28% 6.65%, 75.66% 12.29%, 73.05% 10.68%, 71.67% 1.97%, 67.72% 3.42%, 66.7% 13.91%)',
})

function ErrorStrip({ message, nonFieldErrors }) {
  const [mountedMessage, setMountedMessage] = React.useState(message || null)

  useEffect(() => {
    if (!!message) {
      setMountedMessage(message)
    }
  }, [message])

  const handleUnmountMessage = useCallback(() => setMountedMessage(null), [
    setMountedMessage,
  ])

  return (
    <RippedDiv sx={{ width: '100vw' }}>
      <Collapse
        orientation="horizontal"
        in={!!message}
        onExited={handleUnmountMessage}
      >
        <RippedDiv
          sx={{
            width: '100vw',
            backgroundColor: '#bf170b',
            pt: 4,
            px: 3,
            pb: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <ErrorIcon sx={{ color: '#ffffff', mr: 2 }} />
          <Typography
            sx={{ backgroundColor: 'unset', color: '#ffffff' }}
            variant="h6"
            component="p"
          >
            {mountedMessage}
          </Typography>
        </RippedDiv>
      </Collapse>
    </RippedDiv>
  )
}

export default ErrorStrip
