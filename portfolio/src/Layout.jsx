import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import './App.css'
import App from './App.jsx'

function Layout() {

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Layout
