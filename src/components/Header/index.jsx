import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='container px-6 md:px-10 lg:px-16 xl:px-20 py-5'>
        <div className='w-full flex justify-center items-center gap-5 text-gray-700'>
          <Link
            className='font-medium hover:underline underline-offset-2 transition-all duration-300'
            to={'/'}
          >
            Home
          </Link>
          <Link
            className='font-medium hover:underline underline-offset-2 transition-all duration-300'
            to={'/login'}
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
