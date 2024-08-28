import React from 'react'

const Header = () => {
  return (
    <div className='bg-black  '>
          <div className='flex font-black'>
             <img src='/images/moviegptlogo.jpeg' className='w-12 h-12 m-3 rounded-3xl'></img>
             <h1 className='text-blue-600 text-3xl m-3 font-extrabold italic'>MovieGPT</h1>
          </div>
    </div>
  )
}

export default Header