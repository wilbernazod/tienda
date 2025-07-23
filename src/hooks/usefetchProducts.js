import { useState,useEffect } from "react";
import axios from "axios";

const usefetchProducts = (url) => {
    const [data,setData] = useState([]); //Pero podria ser un null
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect (()=>{
        const fetchData = async () => { //Esto es para mostrar la data y async es para que espere el tiempo que necesite
            try {
                setLoading(true);
                const response = await axios.get(url);
                setData(response.data)
            } catch (error) {
                setError(error);
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    },[url])

    return {data,loading,error};
}

export default usefetchProducts