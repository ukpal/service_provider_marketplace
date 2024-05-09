"use client"
import React from 'react'
import "./layout.css"
import Navbar from './navbar'
import { usePathname } from 'next/navigation';



const SellerLayout = ({ children }) => {
    const pathname = usePathname();

    return (
        pathname === "/seller/registration" || pathname === "/seller/login" ?
        (
            <>
                {children}
            </>
        ):
            (<>
                <Navbar />
                <div className="container py-2">
                    {pathname}
                    {children}
                </div>

            </>)

    )


}

export default SellerLayout