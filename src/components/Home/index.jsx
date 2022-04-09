import { getAuth } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import app from '../../firebase.init'

const auth = getAuth(app)

const Home = () => {
  const [user] = useAuthState(auth)
  return (
    <div>
      <h2 className='text-center text-3xl font-medium text-green-400'>
        This is Home
      </h2>
      <p className='text-center text-base font-medium my-5'>
        Welcome{' '}
        <span className='text-2xl leading-none font-bold text-blue-500'>
          {user?.uid ? user?.displayName : 'Guest User'}
        </span>
      </p>
    </div>
  )
}

export default Home
