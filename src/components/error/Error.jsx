import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

export const Error = () => {
  return (
    <div>
        <h2 >Somthing went Wrong plz try again</h2>
        <Link to='/' >Home page </Link>
    </div>
  )
}
