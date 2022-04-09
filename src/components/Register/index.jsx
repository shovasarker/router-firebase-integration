import React from 'react'

const Register = () => {
  return (
    <div className='container px-6 md:px-10 lg:px-16 xl:px-20 my-10'>
      <form className='w-full md:w-1/2 lg:w-2/5 mx-auto space-y-4 p-5 rounded-2xl border border-blue-500'>
        <h2 className='text-center text-2xl text-blue-500 font-medium font-mono'>
          Please Register!
        </h2>
        <input
          className='w-full px-4 py-1.5 rounded-[4px] border focus:outline-none outline-none block shadow-inner'
          type='name'
          placeholder='Enter Your Name'
        />
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
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
