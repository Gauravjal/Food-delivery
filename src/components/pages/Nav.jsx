import React from 'react'
import { Outlet, Link } from "react-router-dom";
function Nav() {
  return (
    <header 
    // className='fixed z-50 w-screen p-6 px-16'
      style={{textAlign:'center',top:0,alignItems:'center',display:'flex',boxShadow:'0px 3px 20px rgba(0,0,0,0.1)'}}
     >
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div>
      <img alt="" style={{width:'110px',height:'80px',paddingLeft:'30px',display:'block'}} src="https://seeklogo.com/images/G/good-food-logo-36B7F2C85D-seeklogo.com.png"></img>
      </div>
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
        <Link to="/">Home</Link>
        </li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
        <Link to="/foods">Foods</Link>
        </li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
        <Link to="/cart">Cart</Link>
        </li>
        <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
        {/* <Link to="/cart">Cart</Link> */}
        About us
        </li>
        
        </ul>
        </div>
        </div>
    </header>
  )
}

export default Nav;