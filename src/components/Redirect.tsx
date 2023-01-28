import React from 'react'
import { redirect } from 'react-router-dom'

const Redirect = (to:string) => {
  redirect(to)
  return (
    <></>
  )
}

export default Redirect