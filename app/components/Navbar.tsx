import React from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className="head">
        <h1><b><i>WatchStore</i></b></h1>
        <nav>
            <Link href="/home"><i>Home</i></Link>
            <Link href="/about"><i>About</i></Link>
            <Link href="/watches"><i>Watches</i></Link>
            <Link href="/contact"><i>Contact</i></Link>
            <FaShoppingCart className="icon"/>
        </nav>

    </header>
    
      
    
  )
}

export default Navbar
