import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'
import { Nav } from '../components'
import { GetDeviceWidth } from '../helpers/deviceWidth'
import more from "../assets/more.png"
import back from "../assets/back.png"
import { NavLink } from 'react-router-dom'

const Header = () => {

  const [deviceWidthDetails, setDeviceWidthDetails] = useState<any>([0, 0, 1])
  const [navPage, setNavPage] = useState(false);

  const renderNavPage = () => {
    setNavPage(true)
  }
  const unRenderNavPage = () => {
    setNavPage(false)
  }

  useEffect(() => {
    const ThisDeviceWidth = () => {
      setDeviceWidthDetails(GetDeviceWidth());
    };
    window.addEventListener('resize', ThisDeviceWidth);
    ThisDeviceWidth();
  }, [])

  return (
    <div className={`w-full py-3 bg-white px-2 lg:px-10 flex justify-between items-center`}>
      {navPage == true ? 
        <div className='top-0 left-0 bg-black fixed w-full h-screen navdrop'>
          <div className='bg-[#2E3E55CC] p-5'>
            <img src={back} alt="" onClick={unRenderNavPage} />
            <div className='w-full flex flex-col mt-16 text-sm gap-5'>
              <a href='#home' onClick={unRenderNavPage} className='text-white'> Home </a>
              <a href='#contact' onClick={unRenderNavPage} className='text-white'> Contact Us </a>
              <a href='#track' onClick={unRenderNavPage} className='text-white'> Track Item </a>
              <a href='' className='text-white'> Login </a>
              <a href='' className='text-white'> Register </a>
            </div>
          </div>
        </div> : 
        null
      }
      <img src={logo} alt="logo" className='w-8' />
      {
        deviceWidthDetails[0] >= deviceWidthDetails[2] ?
          <Nav /> :
          <div onClick={renderNavPage}>
            <img src={more} alt="" />
          </div>
      }
    </div>
  )
}

export default Header