import Box from '@mui/material/Box'
import { styled } from '@mui/system'

const Svg = styled('svg')()

const JaggedSvg = () => (
  <Svg
    sx={{
      position: 'absolute',
      bottom: '0',
      width: '100%',
      height: '75%',
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <polygon
      fill="white"
      points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
    />
    <polygon
      fill="white"
      points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
    />
  </Svg>
)

const BackgroundContainer = ({ children, ...rest }) => {
  return (
    <Box
      component="main"
      sx={{
        backgroundImage: (theme) =>
          `linear-gradient(to top, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.dark} 100%)`,
        width: `100vw`,
        height: `100vh`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <JaggedSvg />
      <Box id="content" zIndex="10" {...rest}>
        {children}
      </Box>
    </Box>
  )
}

export default BackgroundContainer
