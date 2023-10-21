import { useEffect, useState } from "react";


const useDataFetching = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(url);
                if (!res) {
                    throw new Error('Response was not ok');
                }
                const data = await res.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        getData();
    }, [url]);

    return [data, loading, error]

};

export default useDataFetching;