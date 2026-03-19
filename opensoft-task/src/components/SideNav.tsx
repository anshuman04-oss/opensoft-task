import React from 'react'
import Home from './Home'
import Quotes from './Quotes'
import Teams from './Teams'
import NavFooter from './NavFooter'

function SideNav() {

    return (
        <div className='flex flex-col w-1/4 bg-gray-800 text-gray-50 min-h-screen p-4 rounded-b-lg'>
            <div className='flex-1'>
                <Home />
                <Quotes />
                <Teams />
            </div>
            <footer className='text-center'>
                <NavFooter />
            </footer>
        </div>
    )
}

export default SideNav
