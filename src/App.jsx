import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/SereneHeader/Header'

function App() {

  return (
    <ChakraProvider>
      <Header/>
    </ChakraProvider>
  )
}

export default App
