import React from 'react'
import Navbar from './navbar'

const Layout = ({ children, ...rest }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout