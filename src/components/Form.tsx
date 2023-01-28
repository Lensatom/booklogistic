import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const Form = () => {

  return (
    <form className='flex flex-col gap-5 bg-white lg:bg-transparent'>    
      <div className='flex flex-col justify-between w-full bg-white h-full lg:rounded-md p-5'>
        <div>
          <label> Email </label>
          <input  className='border-[1px] border-gray-500 w-full py-1 rounded-md px-2'/>
        </div>
        <div className='mt-3'>
          <label> Pickup Location </label>
          <input className='border-[1px] border-gray-500 w-full py-1 rounded-md px-2'/>
          <div className='text-gray-500 my-1'>
            <input type="checkbox" />
            <label className='capitalize'> provide more infomation on pickup location </label>
          </div>
        </div>
        <textarea placeholder="more details for pickup"  className='border-[1px] border-gray-500 w-full py-2 rounded-md px-2 h-16'></textarea>
        <div className='mt-3'>
          <label> Enter Destination </label>
          <input  className='border-[1px] border-gray-500 w-full py-1 rounded-md px-2'/>
          <div className='text-gray-500 my-1'>
            <input type="checkbox" />
            <label className='capitalize'> provide more infomation on pickup location? </label>
          </div>
        </div>
        <textarea placeholder="more details for pickup" className='border-[1px] border-gray-500 w-full py-2 rounded-md px-2 h-16'></textarea>
        <NavLink to='book'>
          <Button text="Request" className='mt-5' />
        </NavLink>
      </div>
    </form>
  )
}

export default Form