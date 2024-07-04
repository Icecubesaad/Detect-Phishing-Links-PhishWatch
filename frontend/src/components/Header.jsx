import React from 'react'
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
function Header() {
  return (
    <div className='flex flex-row h-[13vh] w-full'>
        <div className='flex flex-row w-[50%] items-center pl-10'>
            <img src={logo} height={150} width={150} alt='logo' />
            <p className='text-xl text-white'>PhishWatch</p>
        </div>
        <div className='w-[50%] flex items-center'>
            <ul className='flex flex-row gap-5'>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/playground"}><li>Playground</li></Link>
                <Link to={"/docs"}><li>Documentation</li></Link>
                <Link to={"/contact"}><li>Contact Us</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Header