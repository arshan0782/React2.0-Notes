import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import NotFound from './pages/NotFound'
import Frontend from './pages/Frontend'
import Backend from './pages/Backend'
import ArshanDetails from './pages/ArshanDetails'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/about' element = {<About/>}></Route>
      <Route path='/contact' element = {<Contact/>}></Route>
      <Route path='/services' element = {<Services/>}>
      <Route path='frontend' element ={<Frontend/>}></Route>
      <Route path='backend' element ={<Backend/>}></Route>
      
      </Route>
      <Route path='/about/:id' element ={<ArshanDetails/>}></Route>
      <Route  path='*' element ={<NotFound/>}>

      </Route>
      </Routes>
      
      <Footer/> 
    </div>
  )
}

export default App