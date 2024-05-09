"use client"
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation'
import { BsPersonCircle,BsFillGrid3X3GapFill,BsTools,BsListUl,BsReceipt    } from "react-icons/bs";

const Navbar = () => {
    const currentPath = usePathname();
    return (
        <nav className="navbar navbar-expand-lg bg-primary py-1" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SELLER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-sm-auto mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={"nav-link "+ (currentPath==='/seller/dashboard' && 'active')} aria-current="page" href="/seller/dashboard"><BsFillGrid3X3GapFill className='fs-5 mb-1'/> Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link "+ (currentPath==='/seller/services' && 'active')} href="/seller/services"><BsListUl className='fs-5 mb-1'/> Services</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><BsReceipt className='fs-5 mb-1'/> Orders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><BsTools className='fs-5 mb-1'/> Settings</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>

                    <ul className="navbar-nav mb-2 mb-lg-0">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <BsPersonCircle className='fs-4 mb-1' /> UKP
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                {/* <li><a className="dropdown-item" href="#">Another action</a></li> */}
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar