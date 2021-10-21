import axios from "axios";
import { useEffect, useState } from "react"

export default function useFetch(url, initial = {}) {
    const [data, setData] = useState(initial);
    useEffect(() => {
        axios.get(url).then((res) => {
            setData(res.data)
        })
    }, []);

    return data;
}