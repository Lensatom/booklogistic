import React from 'react'
import { Button } from '../components'

const Book = () => {
  return (
    <form className='pt-24 w-full px-5 md:px-10 lg:px-72 flex flex-col gap-5'>
      <input className='w-full bg-gray-100 border-[1px] border-gray-300 p-2 rounded-lg' placeholder='meran road, lagos, nigeria' />
      <input className='w-full bg-gray-100 border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Ikeja, Nigeria' />
      <input className='w-full bg-gray-100 border-[1px] border-gray-300 p-2 rounded-lg' placeholder='come in time' />
      <input className='w-full bg-gray-100 border-[1px] border-gray-300 p-2 rounded-lg' placeholder='17.4 km' />
      <div className='flex flex-col gap-1'>
        <label className='text-lg'> Delivery Type </label>
        <div className='flex justify-between items-center'>
          <div className='text-xs lg:text-sm flex gap-1'>
            <input type='checkbox' />
            <label> Regular ( same day delivery) </label>
          </div>
          <div className='text-sm flex gap-1'>
            <input type='checkbox' />
            <label> Express ( instant delivery) </label>
          </div>
        </div>
        <input className='w-full bg-gray-100 border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Amount' />
      </div>
      <hr />
      <input className='w-full border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Sender name' />
      <input className='w-full border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Sender number' />
      <input className='w-full border-[1px] border-gray-300 p-2 rounded-lg' placeholder='receiver name' />
      <input className='w-full border-[1px] border-gray-300 p-2 rounded-lg' placeholder='receiver number' />
      <div className='flex flex-col gap-2'>
        <label className='text-lg'> Payment By </label>
        <div className='flex justify-between items-center'>
          <div className='text-xs lg:text-sm flex gap-1'>
            <input type='checkbox' />
            <label> Sender </label>
          </div>
          <div className='text-sm flex gap-1'>
            <input type='checkbox' />
            <label> Receiver </label>
          </div>
        </div>
        <textarea className='w-full h-44 border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Item Description'></textarea>
        <textarea className='w-full h-44 border-[1px] border-gray-300 p-2 rounded-lg' placeholder='Delivery Note'></textarea>
      </div>
      <hr />
      <div className='flex flex-col gap-1'>
        <label className='text-lg'> Email </label>
        <input className='w-full border-[1px] border-gray-300 p-2 rounded-lg' placeholder='cali@mail.com' />
      </div>
      <Button text="REQUEST" className='mb-10' />
    </form>
  )
}

export default Book