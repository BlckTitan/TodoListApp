import { useState, useEffect, useContext } from "react";

const useFetchAllQuery = (resource) =>{
    
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(()=>{
        const abortCont = new AbortController();
        
        fetch(resource, {signal: abortCont.signal})
        .then((response)=>{
            if(response.status !== 200){
                return new Error('Could not fetch data');
            }else{
                return response.json();
            }
        }).then((data)=>{
            setData(data);
            setIsLoading(false);
            setError(null);
        }).catch((error)=>{
            if(error.name === "AbortError"){
                console.log('fetch aborted');
            }else{
                setIsLoading(false);
                setError(error.message);
                console.log(error.message);
            }
        });
        
        return () => abortCont.abort();
        
    }, [resource]);
        
    return {data, isLoading, error}

}

export default useFetchAllQuery;