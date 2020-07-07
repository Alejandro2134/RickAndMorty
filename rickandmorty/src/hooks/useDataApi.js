import { useState, useEffect } from 'react';

export const useDataApi = (url) => {

    const [dataApi, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(url)
            .then(data => data.json())
            .then(jsonData => {
                setData(jsonData);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })

    }, [url])

    return [ dataApi, loading, error ];
}