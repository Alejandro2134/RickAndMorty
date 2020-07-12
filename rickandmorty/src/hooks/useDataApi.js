import { useState, useEffect } from 'react';

export const useDataApi = (url) => {

    const [dataApi, setDataApi] = useState({
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
                setDataApi({
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

export const useIndividualData = (url) => {

    const [dataApi, setDataApi] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setDataApi(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            })

    }, [url])

    return [ dataApi, loading, error ];
}