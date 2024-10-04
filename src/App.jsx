import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Maincontent from './components/Maincontent'
import Content from './components/Content'
import Footersite from'./components/Footersite'


function App() {

  return (
    <>
      <NavBar></NavBar>
      <Maincontent></Maincontent>
      <Content></Content>
      <Footersite></Footersite>
    
    </>
  )
}

export default App
