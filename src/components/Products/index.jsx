import { getAuth } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import app from '../../firebase.init'

const auth = getAuth(app)

const Products = () => {
  const [user] = useAuthState(auth)
  return (
    <div className='space-y-5 text-center text-gray-700 font-medium'>
      <h2 className='text-3xl'>This is Products</h2>
      <p className=' text-base'>{user?.uid ? user?.displayName : 'Guest'}</p>
    </div>
  )
}

export default Products
