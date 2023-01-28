import { Button } from '../components'
import location from "../assets/location.png"
import arrow from "../assets/arrow.png"
import clock from "../assets/clock.png"
import whatsAppDark from "../assets/whatsAppDark.png"
import cancel from "../assets/cancel.png"
import { useEffect } from 'react'

const Routes = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const tracks = [
    {
      id: 0,
      name: 'Alabian Solution',
      from: 'meran busstop, lagos -abeokuta express way, lagos. nigeria',
      to: 'ikeja, lagos , nigeria',
      depature: '2022-12-29 15:30 am',
      phone: '08135978939'
    },
    {
      id: 1,
      name: 'Alabian Solution',
      from: 'meran busstop, lagos -abeokuta express way, lagos. nigeria',
      to: 'ikeja, lagos , nigeria',
      depature: '2022-12-29 15:30 am',
      phone: '08135978939'
    }
  ]

  return (
    <div className='pt-[100px] px-5 lg:px-10'>
      <div className='flex lg:flex-row flex-col w-full justify-end items-end lg:items-center gap-2'>
        <p className='text-sm text-gray-500'> Didn’t find the  route your’re looking for? </p>
        <Button text='REQUEST' className='w-[40%] lg:w-[20%] shadow-lg' />
      </div>
      <div className='flex flex-col gap-5 lg:gap-16 lg:px-44 mt-5'>
        {tracks.map(track => {
          return (
            <div key={track.id} className='flex flex-col w-full p-5 shadow-lg shadow-gray-300 rounded-md items-center'>
              <div className='w-full my-5 flex justify-end'>
                <img src={cancel} alt="" className="w-4 cursor-pointer" />
              </div>
              <h2 className='text-lg font-semibold'> {track.name} </h2>
              <div className='w-full flex justify-between my-5 text-gray-700'>
                <div className='flex flex-col items-center gap-1 max-w-[45%]'>
                  <img src={location} alt="" className="w-4" />
                  <p> {track.from} </p>
                </div>
                <div className='flex items-center'>
                  <img src={arrow} alt="" className="w-2" />
                  <img src={arrow} alt="" className="w-2" />
                </div>
                <div className='flex flex-col items-center gap-1 max-w-[45%]'>
                  <img src={location} alt="" className="w-4" />
                  <p> {track.to} </p>
                </div>
              </div>
              <div className='w-full text-gray-700 flex flex-col gap-2'>
                <div className='flex gap-3 items-center text-sm'>
                  <img src={clock} alt="" className="w-4" />
                  <p> Depature: {track.depature} </p>
                </div>
                <div className='flex gap-3 items-center text-sm'>
                  <img src={whatsAppDark} alt="" className="w-4" />
                  <p> Phone: {track.phone} </p>
                </div>
              </div>
              <Button text='BOOK NOW' className='my-5 w-[50%]' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Routes