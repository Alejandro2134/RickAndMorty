import { useState, useEffect } from 'react';

export const useDataApi = (url) => {

    const [dataApi, setData] = useState({
        info: {},
        results: [],
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData({
                    info: data.info,
                    results: dataApi.results.concat(data.results), 
                });
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })

    // eslint-disable-next-line
    }, [url])

    return [ dataApi, loading, error ];
}