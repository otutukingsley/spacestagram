import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './themes/globalStyles'
import { theme } from './themes/colors'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <main className="wrapper">
        <HomeScreen />
      </main>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
