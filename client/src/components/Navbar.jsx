import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-6">
        <div className="flex items-center grow-5 gap-10">
            <a href="" className='flex items-center gap-1.5  transition-all hover:scale-[1.05]'>
                <img src="/logo.png" alt="logo" className='w-8' />
                <span className='text-lg font-bold'>Sidiqstate</span>
            </a>
            <a href="" className='transition-all hover:scale-[1.05]'>Home</a>
            <a href="" className='transition-all hover:scale-[1.05]'>About</a>
            <a href="" className='transition-all hover:scale-[1.05]'>Contact</a>
            <a href="" className='transition-all hover:scale-[1.05]'>Agents</a>
        </div>
        <div className="flex grow-1 bg-red-300 gap-10">
            <a href="" className='transition-all hover:scale-[1.05]'>Sign in</a>
            <a href="" className='transition-all hover:scale-[1.05]'>Sign up</a>
        </div>
    </nav>
  )
}

export default Navbar