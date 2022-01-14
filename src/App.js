import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './themes/globalStyles'
import { theme } from './themes/colors'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <main className="wrapper">
        <HomeScreen />
      </main>
    </ThemeProvider>
  )
}

export default App
