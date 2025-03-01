/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { useState, useEffect, use } from 'react';
import { getRandomQuote } from '../api/api';

function Grid() {

    const rows = 3, cols = 3;
    let quotes = Array.from({ length: rows }, () => Array(cols).fill(''));
    const [btnState, setBtnState] = useState(quotes);
    const [rowState, setRowState] = useState(0);
    const [colState, setColState] = useState(0);
    // We will change the state of the buttons to display the quotes. So, states are to be used.

    const handleQuote = (i: number, j: number) => {
        setRowState(i);
        setColState(j);
        console.log(i, j);
        quotes[i][j] = getRandomQuote().
            then((quote) => {
                console.log(quote);
                quotes[i][j] = quote;
                console.log(quotes[i][j]);
                setBtnState(quotes);
                console.log(btnState);
                return quote;
            });
        console.log(btnState);
    };

    return (
        <div className='text-gray-50 flex justify-center items-center h-screen'>  
            {/* Inside Grid */}
            <div className='flex flex-col'>
                {quotes.map((row, i) => (
                    <div key={i} className='flex'>
                        {row.map((quote, j) => (
                            <button
                            id='quote' 
                            key={j}
                            className='bg-gray-600 text-gray-50 ms-5 mt-5 p-5 flex w-72 items-center justify-center rounded-xl h-52'
                            onClick={() => handleQuote(i, j)}
                            >{btnState[i][j]}</button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Grid
