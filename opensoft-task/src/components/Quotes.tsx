import React from 'react'
import {useNavigate} from 'react-router-dom'

function Quotes() {
    const navigate = useNavigate();

    return (
        <div>
            <button className='rounded-lg bg-gray-900 text-gray-50 font-bold w-full mt-2 py-1'
                onClick={() => navigate('/grid')}
            >Quotes</button>
        </div>
    )
}

export default Quotes
