import React from 'react'

function Footer() {
  return (
    <footer className='w-full h-16 bg-zinc-900 flex justify-end items-center px-16'>
      <div className='flex gap-5'>
        <a href=""><i className='fa-brands fa-instagram text-2xl cursor-pointer text-white hover:opacity-60'></i></a>
        <a href=""><i className='fa-brands fa-x-twitter text-2xl cursor-pointer text-white hover:opacity-60'></i></a>
        <a href=""><i className='fa-brands fa-facebook text-2xl cursor-pointer text-white hover:opacity-60'></i></a>
      </div>
    </footer>
  )
}

export default Footer
