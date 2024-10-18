import { useState, useEffect } from "react";
import axios from 'axios'

const instace = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})

export function useFetch(url){
    const [data, setData] = useState(null);

    useEffect(() => {
        instace.get(url)
            .then(res => setData(res.data))
    }, [])

    return [data, setData]
}