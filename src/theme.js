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
})

export default theme
