
import './App.css'

import {
  ChakraProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import Page from './Page'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App() {

  return ( 
    <ChakraProvider {...{ theme }}>
      <Page />
  </ChakraProvider>
  )
}

export default App
