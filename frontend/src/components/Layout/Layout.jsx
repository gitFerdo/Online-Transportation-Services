import React from 'react'

import NavBar from '../navbar/NavBar'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../../routes/Routers'

const Layout = () => {
  return <>
    <NavBar />
    <Header />
    <Routers />
    <Footer />
  </>
}

export default Layout