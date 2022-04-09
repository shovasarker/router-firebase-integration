import React from 'react'
import { Link } from 'react-router-dom'
import blankProfile from '../../assets/images/blank-profile.svg'
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth, signOut } from 'firebase/auth'
import app from '../../firebase.init'

const auth = getAuth(app)

const Header = () => {
  const navLinks = [
    ['/', 'Home'],
    ['/products', 'Products'],
    ['/orders', 'Orders'],
    ['/register', 'Register'],
  ]

  const [user] = useAuthState(auth)

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
          {user?.uid ? (
            <button
              className='px-5 py-1.5 font-medium bg-blue-500 text-white rounded-[4px] shadow-lg shadow-blue-700/50 hover:shadow-blue-700/30'
              type='button'
              onClick={() => signOut(auth)}
            >
              Sign Out
            </button>
          ) : (
            <Link
              className='px-5 py-1.5 font-medium bg-blue-500 text-white rounded-[4px] shadow-lg shadow-blue-700/50 hover:shadow-blue-700/30'
              to={'/login'}
            >
              Login
            </Link>
          )}
          <img
            src={user?.photoURL ? user?.photoURL : blankProfile}
            alt={user?.displayName && user?.displayName}
            className='w-12 h-12 rounded-full'
          />
        </div>
      </nav>
    </header>
  )
}

export default Header
