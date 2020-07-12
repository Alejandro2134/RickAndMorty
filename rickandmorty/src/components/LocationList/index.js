import React, { useState } from 'react';
import { Link } from '@reach/router';

import { useDataApi } from '../../hooks/useDataApi';
import { LocationCard } from '../LocationCard';

import { Ring } from 'react-spinners-css';
import { Button } from './styles';

export const LocationList = () => {

    const [url, setUrl] = useState('https://rickandmortyapi.com/api/location/');

    const [ data, loading, error ] = useDataApi(url);

    const handleClick = () => {
        setUrl(data.info.next);
    }

    return (
        <div className='row justify-content-center'>
            {
                error 
                    ? <h1>Error</h1>
                    : <React.Fragment>
                        {
                            data.results.map(location => <div className='col-md-3' key={location.id}>
                                                            <Link to={`/location/${location.id}`}>
                                                                <LocationCard 
                                                                    name={location.name}
                                                                />
                                                            </Link>
                                                         </div>
                                            )
                        }
                        {
                            loading
                                ? <Ring color='#4cb5c3' />
                                : data.info.next
                                    ? <Button onClick={handleClick}>More Locations!</Button>
                                    : <React.Fragment />
                               
                        }
                    </React.Fragment>
            }
        </div>
    )
}