import React from 'react'

import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import DoneIcon from '@mui/icons-material/Done'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

const TripleInfo = ({ children, ...rest }) => {
  return (
    <Box sx={{ maxWidth: '300px' }}>
      <Box sx={{ textAlign: 'right', marginBottom: 3, paddingTop: '6px' }}>
        <Typography variant="h1" color="textPrimary">
          The Triple Chasm
        </Typography>
        <Typography variant="caption">See your business clearly</Typography>
      </Box>
      <Box sx={{ textAlign: 'justify', marginBottom: 2.5 }}>
        <Typography variant="body1">
          Triple Chasm is tracking Octue against large cohorts of similar
          companies. Thousands of collective years of experience are distiled
          into helping Octue cross the next chasm...
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 2.5 }}>
        <Typography gutterBottom variant="h2">
          Our Rating
        </Typography>
        <Chip
          icon={<DoneIcon />}
          color="secondary"
          variant="outlined"
          label="Certified Assessment"
          size="small"
          sx={{
            marginRight: 1,
            marginBottom: 1,
            fontFamily: 'Mukta',
            lineHeight: '1.4',
          }}
        />
        <Chip
          icon={<DoneIcon />}
          color="secondary"
          variant="outlined"
          label="Cohort Company"
          size="small"
          sx={{
            marginRight: 1,
            marginBottom: 1,
            fontFamily: 'Mukta',
            lineHeight: '1.4',
          }}
        />
      </Box>
      <Box>
        <Typography gutterBottom variant="h2">
          Areas of Improvement
        </Typography>
        <Chip
          icon={<AttachMoneyIcon />}
          color="primary"
          size="small"
          variant="outlined"
          label="Financial and Investment"
          sx={{
            marginRight: 1,
            marginBottom: 1,
            fontFamily: 'Mukta',
            lineHeight: '1.4',
          }}
        />
        <Chip
          sx={{
            marginRight: 1,
            marginBottom: 1,
            fontFamily: 'Mukta',
            lineHeight: '1.4',
          }}
          icon={<ShowChartIcon />}
          size="small"
          color="primary"
          variant="outlined"
          label="Marketing and Sales"
        />
      </Box>
    </Box>
  )
}

export default TripleInfo
