/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import { API_BASE_URL } from '../constants/constantVars'

export const baseCall = async (endPoint: string) => {
    try {
        // console.log(`${API_BASE_URL}/${endPoint}`)       FINE

        const quote = (await axios.get(`${API_BASE_URL}/${endPoint}`)).data[0].content;
        // console.log(quote);
        return quote;
    } catch (error) {
        console.error(error);
        return error.message;
    }
}

// The below functions will not even be required..
export const getRandomQuote = (endPoint = "quotes/random") => {
    const quote = baseCall(endPoint).
        then((quote) => {
            console.log(quote);
            return quote;
        })
    // Why quote is promise??
    // Answer: Because baseCall is an async function. So, it returns a promise.
    // console.log(quote);
    return quote;
}

export const getQueriedQuotes = (endPoint = "quotes") => {
    const quote = baseCall(endPoint);
    return quote;
}

export const getAuthors = (endPoint = "authors") => {
    const quote = baseCall(endPoint);
    return quote;
}

export const getSearch = (endPoint = "search") => {
    const quote = baseCall(endPoint);
    return quote;
}

export const getTags = (endPoint = "tags") => {
    const quote = baseCall(endPoint);
    return quote;
}