"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Navbar from './navbar'


const AdminLayout = ({children}) => {
  const pathname = usePathname();

  return (
    pathname === "/admin/login" ?
      (
        <>
          {children}
        </>
      ) :
      (<>
        <Navbar />
        <div className="container py-2">
          {pathname}
          {children}
        </div>

      </>)

  )
}

export default AdminLayout