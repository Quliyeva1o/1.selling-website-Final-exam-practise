import axios from 'axios'
import { BASE_URL } from './endpoints'

export const GetAll = () => {
    return (axios.get(BASE_URL)
    )
}

export const getOne = (id) => {
    return (axios.get(BASE_URL+`/${id}`)
    )
}

export const post = (payl) => {
    return (axios.post(BASE_URL,payl)
    )
}


export const del = (id) => {
    return (axios.delete(BASE_URL+`/${id}`))
    
}