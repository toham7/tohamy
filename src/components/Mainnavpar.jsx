import React from 'react'
import Mainlayout from '../layout/Mainlayout'
import { Link } from 'react-router-dom'
export default function Mainnavpar() {
  return (
    <nav style={
        {display:'flex',
         justifyContent:"center", 
          gap:"10px"
    }}>
      <Link to="/">home</Link>
      <Link to="/login">login</Link>
    </nav>
  )
}
