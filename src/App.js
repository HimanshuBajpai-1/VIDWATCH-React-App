import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Videos from './components/Videos'
import Upload from './components/Upload'
import Login from './components/Login'
import Signup from './components/Signup'
import Contact from './components/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/videos' element={<Videos />}/>
        <Route path='/upload' element={<Upload />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App