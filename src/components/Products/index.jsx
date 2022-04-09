import React from 'react'
import useFirebase from '../../hooks/useFirebase'

const Products = () => {
  const { user } = useFirebase()
  return (
    <div className='space-y-5 text-center text-gray-700 font-medium'>
      <h2 className='text-3xl'>This is Products</h2>
      <p className=' text-base'>{user?.uid ? user?.displayName : 'Guest'}</p>
    </div>
  )
}

export default Products
