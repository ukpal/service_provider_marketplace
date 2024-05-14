import React from 'react'
import './layout.css'

const AdminAuthLayout = ({children}) => {
  return (
    <div className='auth-layout'>
        {children}
    </div>
  )
}

export default AdminAuthLayout