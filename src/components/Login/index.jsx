import { getAuth } from 'firebase/auth'
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import app from '../../firebase.init'

const auth = getAuth(app)

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [signInWithGoogle] = useSignInWithGoogle(auth)
  const from = location?.state?.from?.pathname || -1

  console.log(location)
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => navigate(from, { replace: true }))
  }

  return (
    <div className='container px-6 md:px-10 lg:px-16 xl:px-20 my-10'>
      <form className='w-full md:w-1/2 lg:w-2/5 mx-auto space-y-4 p-5 rounded-2xl border border-blue-500'>
        <h2 className='text-center text-2xl text-blue-500 font-medium font-mono'>
          Please Login!
        </h2>
        <input
          className='w-full px-4 py-1.5 rounded-[4px] border focus:outline-none outline-none block shadow-inner'
          type='email'
          placeholder='Enter Your Email'
        />
        <input
          className='w-full px-4 py-1.5 rounded-[4px] border focus:outline-none outline-none block shadow-inner'
          type={'password'}
          placeholder='Enter Your Password'
        />
        <button
          className='w-full block py-1.5 font-medium bg-blue-500 text-white rounded-[4px] shadow-lg shadow-blue-700/50 hover:shadow-blue-700/30'
          type='submit'
        >
          Login
        </button>
        <p className='text-center text-sm font-medium text-gray-600'>or</p>
        <button
          onClick={handleGoogleSignIn}
          className='w-full block py-1.5 font-medium bg-blue-400 text-white rounded-[4px] shadow-lg shadow-blue-700/50 hover:shadow-blue-700/30'
          type='button'
        >
          Login with Google
        </button>
        <button
          className='w-full block py-1.5 font-medium bg-gray-700 text-white rounded-[4px] shadow-lg shadow-gray-700/50 hover:shadow-gray-700/30'
          type='button'
        >
          Login with Github
        </button>
        <button
          className='w-full block py-1.5 font-medium bg-blue-700 text-white rounded-[4px] shadow-lg shadow-blue-700/50 hover:shadow-blue-700/30'
          type='button'
        >
          Login with Facebook
        </button>
      </form>
    </div>
  )
}

export default Login
