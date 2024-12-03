import React, { children } from 'react'
import Mainfooter from "../components/Mainfooter"
import Mainnavpar from "../components/Mainnavpar"

export default function Mainlayout( {children} ) {
  return (
   <> <Mainnavpar />
    {children}
   
   </>
  )
}
