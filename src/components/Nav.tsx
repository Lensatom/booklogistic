import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Nav = () => {

  const { hash } = useLocation();

  return (
    <div className='w-[40%] flex justify-between items-center text-sm text-gray-500'>
      <a href='#home' className={hash === "#home" || hash === "" ? 'border-b-[1px] border-b-[#DF6E1E] pb-1' : 'border-none pb-1'}> Home </a>
      <a href='#contact' className={hash === "#contact" ? 'border-b-[1px] border-b-[#DF6E1E] pb-1' : 'border-none pb-1'}> Contact Us </a>
      <a href='#track' className={hash === "#track" ? 'border-b-[1px] border-b-[#DF6E1E] pb-1' : 'border-none pb-1'}> Track Item </a>
      <a href='/' className={'border-none pb-1'}> Login </a>
      <a href='/' className={'border-none pb-1'}> Register </a>
      <div className='rounded-full w-8 h-8 bg-gray-200'></div>
    </div>
  )
}

export default Nav