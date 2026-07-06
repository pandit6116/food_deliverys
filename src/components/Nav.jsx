import React from 'react'
import { MdOutlineFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

function Nav({ onSearch, onLogout, cartCount, onCartClick }) {
  return (
    <div className='w-full h-[70px] bg-gradient-to-r from-blue-500 to-blue-600 flex justify-between items-center px-5 md:px-12 sticky top-0 z-40 shadow-lg'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
            <div className='w-[50px] h-[50px] rounded-lg  shadow-md flex justify-center items-center hover:scale-105 transition-transform'>
                <MdOutlineFastfood className='w-[28px] h-[28px] text-black-600'/>
            </div>
            <span className='text-white font-bold text-lg hidden sm:inline'>FoodHub</span>
        </div>

        {/* Search Bar */}
        <form className='flex-1 mx-4 md:mx-8 h-[45px] bg-white flex items-center px-4 gap-3 rounded-full shadow-md' onSubmit={(e) => e.preventDefault()}>
            <IoIosSearch className='w-[22px] h-[22px] text-black-600'/>
            <input type="text" placeholder="Search for food..." 
            className='w-[100%] outline-none bg-transparent text-gray-800 placeholder-gray-400' onChange={(e) => onSearch(e.target.value)} />
        </form>

        {/* Cart Icon */}
        <div className='w-[50px] h-[50px] rounded-lg shadow-md flex justify-center items-center relative cursor-pointer hover:bg-gray-100 transition-colors' onClick={onCartClick}>
            <span className='absolute top-0 right-2 bg-red-500 text-white rounded-full w-[18px] h-[14px] flex items-center justify-center font-bold text-xs'>
                {cartCount}
            </span>
            <FiShoppingBag className='w-[24px] h-[24px] text-black-600'/>
        </div>

        {/* Logout Button */}
        <button onClick={onLogout} className='ml-4 w-[50px] h-[50px] rounded-lg bg-red-500 shadow-md flex justify-center items-center hover:bg-red-600 transition-all active:scale-95'>
            <IoMdLogOut className='w-[24px] h-[24px] text-white'/>
        </button>
    </div>
  )
}

export default Nav