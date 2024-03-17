import React, { Fragment, Suspense, lazy } from 'react'
// import Home from './components/home/home'
// import Header from './components/header/Header'
// import About from './components/about/About'
// import Contact from './components/contact/Contact'
// import Products from './components/products/Products'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

const Home = lazy(() => import('./components/home/Home'));
const About = lazy(() => import('./components/about/About'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Products = lazy(() => import('./components/products/Products'));
const Header = lazy(() => import('./components/header/Header'));
const Footer = lazy(() => import('./components/footer/Footer'));



const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </Fragment>
  )
}

export default App
