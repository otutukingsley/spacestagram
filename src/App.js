import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './themes/globalStyles'
import { theme } from './themes/colors'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
    </ThemeProvider>
  )
}

export default App
