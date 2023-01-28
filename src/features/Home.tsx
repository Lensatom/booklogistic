import { Button, Form } from "../components"
import tracklocation from "../assets/tracklocation.png"
import whatsapp from "../assets/whatsapp.png"
import location from "../assets/location.png"
import mail from "../assets/mail.png"
import phone from "../assets/phone.png"
import facebook from "../assets/facebook.png"
import logo from "../assets/logo.png"
import lightfacebook from "../assets/lightfacebook.png"
import lightwhatsapp from "../assets/lightwhatsapp.png"
import lightgoogleplus from "../assets/lightgoogleplus.png"
import lightinstagram from "../assets/lightinstagram.png"
import partner from "../assets/partner.png"

const Home = () => {

  return (
    <div className="px-5 lg:px-10 lg:relative">
      <div id='home' className='w-full lg:h-screen backdrop lg:flex lg:flex-row lg:justify-between items-center lg:px-10'>
        <div className="h-3/4 pt-24 lg:pt-5 px-2">
          <h2 className="text-5xl lg:text-7xl text-white font-bold"> Find Your preferred logistic company </h2>
          <h4 className="py-2 text-3xl text-white"> From pickup to destination </h4>
          <p className="text-white w-1/2 lg:w-1/3"> we connect you to a verified dispatch company. </p>
        </div>
        <div className="w-full lg:w-1/2 lg:h-3/4 mt-10">
          <Form />
        </div>
      </div>
      <div id='track' className="lg:absolute lg:h-screen py-16 lg:py-0 w-full px-2 lg:px-10 flex flex-col lg:flex-row justify-between items-center gap-8 left-0">
        <div className="flex flex-col justify-start">
          <img src={tracklocation} alt="" width="50%" />
          <h4 className="font-bold"> GET UPDATE </h4>
          <h2 className="text-lg font-extrabold"> TRACK YOUR ITEM </h2>
          <hr className="my-10 bg-gray-600 h-[2px] w-[70%]"/>
          <Button text="CHECK NOW" className="w-[70%]" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-row-reverse mt-10 lg:mt-0 lg:relative items-end h-full gap-12 lg:gap-0">
          <div className="lg:absolute w-1/2 lg:w-[70%] bg-[#DF6E1E] top-24 capitalize left-0 p-5 rounded-md shadow-md">
            <h2 className="text-white font-semibold text-xl"> interested in partnering with <br /> booklogistics </h2> 
            <p className="text-white mt-5"> we are ready to assist you with your <br /> orders </p>
            <Button text="GET IN TOUCH" className="mt-24 w-full lg:w-[40%]" />
          </div>
          <img src={partner} alt="" className="w-1/2 lg:w-full" />
        </div>
      </div>
      <div id='contact' className="w-full flex flex-col lg:flex-row justify-between items-center px-2 gap-5 lg:gap-24 lg:px-10 py-12 lg:mt-[60%]">
        <form className="w-full lg:w-1/2 flex flex-col gap-8 justify-between text-white font-bold">
          <div className="w-full flex flex-col">
            <label className="text-gray-500 font-semibold text-lg"> NAME </label>
            <input className="p-3 mt-1 border-[1px] border-gray-500 rounded-md text-black text-sm"/>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-gray-500 font-semibold text-lg"> EMAIL </label>
            <input className="p-3 mt-1 border-[1px] border-gray-500 rounded-md text-black text-sm"/>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-gray-500 font-semibold text-lg"> MESSAGE </label>
            <textarea className="h-[200px] border-[1px] border-gray-500 p-3 mt-1 rounded-md text-black text-sm"></textarea>
          </div>
          <Button text="Send" className="w-[30%]" />
          <div className="flex flex-col gap-5 w-1/2 mt-5 items-start capitalize font-normal text-sm text-gray-500">
            <div className="h-4 flex">
              <img src={location} alt="" className="w-4" />
              <p className="ml-5"> ikeja, lagos. </p>
            </div>
            <div className="h-4 flex">
              <img src={phone} alt="" className="w-4" />
              <p className="ml-5"> +234 (0) 817 500 9200 </p>
            </div>
            <div className="h-4 flex">
              <img src={mail} alt="" className="w-4" />
              <p className="ml-5"> support@booklogistic.com </p>
            </div>
            <div className="h-4 flex">
              <img src={whatsapp} alt="" className="w-4" />
              <p className="ml-5"> +234 (0) 817 500 9200 </p>
            </div>
            <div className="cols-2 h-4 flex">
              <img src={facebook} alt="" className="w-4" />
              <p className="ml-5 capitalize"> booklogistics </p>
            </div>
          </div>
        </form>
        <div className="px-2 w-full lg:w-1/2 rounded-md lg:px-10 bg-[#2E3E55] py-10 flex flex-col justify-between items-left text-left">
          <p className="text-[#B4B2B2]"> lets get to meet you various social platform </p>
          <p className="text-[#B4B2B2]"> we are ready to be of assitance </p>
          <div className="flex items-center gap-5 mt-10 lg:my-5">
            <div className="p-3 rounded-full">
              <img src={lightfacebook} alt="" className="w-3" />
            </div>
            <div className="p-3 rounded-full">
              <img src={lightwhatsapp} alt="" className="w-5" />
            </div>
            <div className="p-3 rounded-full">
              <img src={lightgoogleplus} alt="" className="w-5" />
            </div>
            <div className="p-3 rounded-full">
              <img src={lightinstagram} alt="" className="w-5" />
            </div>
          </div>
          <img src={logo} alt="" width="100" className="bg-black rounded-xl mb-5" />
          <div className="text-white">
            <span> privacy policy | </span>
            <span className="text-[#DF631E]"> contact </span>
            <span> | terms and conditions </span>
          </div>
          <div className="text-white">
            <span> Designed By </span>
            <span className="text-[#DF631E]"> Booklogistic </span>
            <span> &#169; 2021 All Right Reserved </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home