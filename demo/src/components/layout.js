import React from 'react'
import Navbar from './navbar'

import '../styles/layout.css'

const Layout = ({ children, ...rest }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout