import React, { useEffect, useCallback } from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import Zoom from '@mui/material/Zoom'

function FormCard({ children, submitting }) {
  const [mountSpinner, setMountSpinner] = React.useState(submitting)

  useEffect(() => {
    if (submitting) {
      setMountSpinner(true)
    }
  }, [submitting])
  const handleUnmountSpinner = useCallback(() => setMountSpinner(false), [
    setMountSpinner,
  ])

  return (
    <Card
      id="card"
      sx={{
        width: '90%',
        maxWidth: '350px',
        alignContent: 'center',
        overflow: 'visible',
        boxSizing: 'border-box',
        boxShadow: (theme) => theme.shadows[10],
        pt: 0,
        px: 3,
        pb: 4,
      }}
    >
      <Box
        id="firstflex"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          pb: submitting ? 7 : 4,
          width: '100%',
          height: '0',
          position: 'relative',
          x: 0,
          y: 0,
        }}
      >
        <Zoom in={submitting} onExited={handleUnmountSpinner}>
          <Box
            sx={{
              position: 'absolute',
              borderRadius: '24px',
              marginTop: '-20px',
              visibility: mountSpinner ? 'visible' : 'hidden',
              width: '48px',
              height: '48px',
              p: '4px',
              // backgroundColor: '#bf170b',
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.light} 90%)`,
              boxShadow: (theme) => theme.shadows[10],
            }}
          >
            <CircularProgress
              sx={{
                visibility: submitting ? 'visible' : 'hidden',
                color: '#ffffff',
              }}
            />
          </Box>
        </Zoom>
      </Box>
      {children}
    </Card>
  )
}

export default FormCard
