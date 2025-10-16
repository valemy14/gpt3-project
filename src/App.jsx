import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Steps from './pages/Steps'
import Request from './pages/Request'
import Features from './pages/Features'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Steps/>
      <Request/>
      <Features/>
      <Footer/>
    </>
  )
}

export default App
