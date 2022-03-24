import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  palette: {
    primary: {
      dark: '#FE6B8B',
      main: '#FF7D6F',
      light: '#FF8E53',
    },
    secondary: {
      dark: '#330867',
      main: '#318DAD',
      light: '#30cfd0',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Mukta, sans-serif',
      fontWeight: 500,
      fontSize: '1.35rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'Mukta, sans-serif',
      fontWeight: 400,
      fontSize: '1.15rem',
      // lineHeight: 1.6,
      // letterSpacing: '0.0075em',
      // textTransform: 'uppercase',
    },
    body1: {
      fontFamily: 'Mukta, sans-serif',
      fontSize: '0.9rem',
    },
    caption: {
      fontFamily: 'Mukta, sans-serif',
      fontStyle: 'italic',
    },
  },
})

export default theme
