import React from 'react'
import SideNav from './SideNav'

function Front() {

    return (
        <div className='flex'>
            <SideNav />
            <div className='bg-gray-700 w-1/4'></div>
            <div className='bg-gray-600 w-1/4'></div>
            <div className='bg-gray-500 w-1/4'></div>
        </div>
    )
}

export default Front
