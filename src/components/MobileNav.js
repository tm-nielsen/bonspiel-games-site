import React from 'react'
import { Link } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'
import '../styling/mobilenav.css'

const MobileNav = () => {
  return (
    <div className="nav">
        <div className="nav-button">
            <BiMenu className='nav-button-icon'/>
        </div>
    </div>
  )
}

export default MobileNav