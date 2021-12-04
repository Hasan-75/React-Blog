import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortController = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal: abortController.signal})
            .then(
                res => {
                    if(res.ok){
                        return res.json();
                    }
                    throw Error(`Failed to fetch data from url: ${url}`);
                }
            )
            .then(
                data => {
                    setError(null);
                    setData(data);
                    setIsLoading(false);
                }
            )
            .catch( 
                err => {
                    setError(err.message);
                    setIsLoading(false);
            })
        }, 500)
        return () => abortController.abort();
    }, [url]);

    return {data, isLoading, error};
}
 
export default useFetch;