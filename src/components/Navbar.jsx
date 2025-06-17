import React from 'react'
import { Link } from 'react-router'

function Navbar() {
    const navigation = [
        {
            id: 1,
            name: "Dashboard",
            path: "/",
        },
        {
            id: 2,
            name: "Expenses",
            path: "/expenses",
        },
        {
            id: 3,
            name: "Wallets",
            path: "/wallets",
        },
        {
            id: 4,
            name: "Summary",
            path: "/summary",
        },
        {
            id: 5,
            name: "Accounts",
            path: "/accounts",
        },
        {
            id: 6,
            name: "Settings",
            path: "/settings",
        },
    ]
  return (
    <nav className='flex flex-col sm:gap-6 gap-3 list-none xl:mt-36 mt-20'>
        {
            navigation.map((navLink)=>(
                <Link key={navLink.id} to={navLink.path} className='nav-link'>{navLink.name}</Link>
            ))
        }
        
        {/* <Link to="/" className='nav-link'>Dashboard</Link>*/}
    </nav>
  )
}

export default Navbar