import React from 'react'
import './authLayout.css'

const SellerAuthLayout = ({children}) => {
  return (
    <div className='auth-container'>
        {children}
    </div>
  )
}

export default SellerAuthLayout