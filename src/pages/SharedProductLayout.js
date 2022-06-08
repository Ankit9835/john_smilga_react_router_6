import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedProductLayout = () => {
  return (
    <div>
      <h3>products page</h3>
      <Outlet />
    </div>
  )
}

export default SharedProductLayout
