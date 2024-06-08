import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />      {/* //This contains the child nodes of the Layout component routed at App.js */}
        <Footer />
    </>
  )
}

export default Layout