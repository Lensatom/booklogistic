import React from 'react'

type ThisTypes = {
  text: string,
  className?: string 
}

const Button = (props:ThisTypes) => {

  const {text, className} = props;

  return (
    <div className={`w-full text-center py-2 bg-[#2E3E55] text-white font-bold uppercase rounded-md ${className}`}> {text} </div>
  )
}

export default Button