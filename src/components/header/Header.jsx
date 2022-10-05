import React from 'react'
import {BellIcon, ChipIcon, InboxIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/outline'

function Header() {
  return (
    <div className='bg-[#F0F5F5] w-full py-6 items-center justify-between flex px-12'>
        {/* search */}
        <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
            {/* icon */}
            <SearchIcon className='w-4 h-4'/>
            <input 
            type="text" 
            className='bg-transparent outline-none' 
            placeholder='Search anything ...' />

        </div>
        {/* logo */}
        <div className='items-center w-full justify-center flex space-x-4'>
            <ChipIcon className='h-6 w-6'/>
            <h1 className='text-xl text-gray-900 font-medium'> DevSite</h1>
        </div>
        {/* icons */}
        <div className='items-center w-full justify-end space-x-6 flex'>
            <BellIcon className='header-icon' />
            <InboxIcon className='header-icon' />
            <UserCircleIcon className='header-icon' />
        </div>
    </div>
  )
}

export default Header