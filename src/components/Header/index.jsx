import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const navLinks = [
    ['/', 'Home'],
    ['/products', 'Products'],
    ['/orders', 'Orders'],
    ['/register', 'Register'],
    ['/login', 'Login'],
  ]
  return (
    <header>
      <nav className='container px-6 md:px-10 lg:px-16 xl:px-20 py-5'>
        <div className='w-full flex justify-center items-center gap-5 text-gray-700'>
          {navLinks?.map(([link, value], i) => (
            <Link
              className='font-medium hover:underline underline-offset-2 transition-all duration-300'
              to={link}
              key={i}
            >
              {value}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
