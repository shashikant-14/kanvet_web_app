import React, { Fragment } from 'react'
import Home from './components/home/home'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Products from './components/products/Products'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

const App = () => {
  return (
    <Fragment>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>

    </Fragment>
  )
}

export default App
