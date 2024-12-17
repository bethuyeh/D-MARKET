import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaBagShopping } from "react-icons/fa6";
import Logo from '../Assets/AF-1-removebg-preview.png'



function Navbar() {
    const [nav, setNav] =useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (

    <div>
        <nav className='p-3 bg-white shadow md:flex md:items-center md:justify-between'>
            <div className='flex justify-between items-center'>
            <Link to='/'>
                <span className='text-2xl font-blackOps cursor-pointer'>
                <img className='h-[60px] inline' src={Logo} alt='/img'/>
                    AFRO-THREADS
                </span>
                </Link>
            <span onClick={handleNav} className='cursor-pointer md:hidden block'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </span>
            <ul className={nav ? 'opacity-100 top-80 h-full border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%] top-0 opacity-0'}>
            <li className='mx-4 my-6 md:my-0 text-xl hover:text-orange-500 duration-500'><Link to='/'>Home</Link></li>
             <li className='mx-4 my-6 md:my-0 text-xl hover:text-orange-500 duration-500'><Link to='/about'>About</Link></li>
             <li className='mx-4 my-6 md:my-0 text-xl hover:text-orange-500 duration-500'><Link to='/shop'>Shop</Link></li>
             <li className='mx-4 my-6 md:my-0 text-xl hover:text-orange-500 duration-500'><Link to='/contact'>Contact</Link></li>
         </ul>

        

            </div>


            <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
            <li className='mx-4 my-6 md:my-0 text-xl hover:text-orange-500 duration-500'><Link to='/'>Home</Link></li>
                <li className='mx-4 my-6 md:my-0 text-xl hover:text-orange-500 duration-500'><Link to='/about'>About</Link></li>
                <div className='flex'>
                <li className='mx-4 my-6 md:my-0 text-xl hover:text-orange-500 duration-500 flex'><Link to='/shop'>Shop</Link></li>
                <FaBagShopping size={30}  className='text-gray-800 cursor-pointer'/>
                </div>
                <li className='mx-4 my-6 md:my-0 text-xl hover:text-orange-500 duration-500'><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar