import React, { useState } from 'react';
import { Link } from '@reach/router';

import { useDataApi } from '../../hooks/useDataApi';
import { EpisodeCard } from '../EpisodeCard';

import { Ring } from 'react-spinners-css';
import { Button } from './styles';

export const EpisodeList = () => {

    const [url, setUrl] = useState('https://rickandmortyapi.com/api/episode/');

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
                            data.results.map(episode => <div className='col-md-3' key={episode.id}>
                                                            <Link to={`/episode/${episode.id}`}>
                                                                <EpisodeCard 
                                                                    name={episode.name}
                                                                />
                                                            </Link> 
                                                        </div>
                                            )
                        }
                        {
                            loading
                                ? <Ring color='#4cb5c3' />
                                : data.info.next
                                    ? <Button onClick={handleClick}>More Episodes!</Button>
                                    : <React.Fragment />      
                        }
                    </React.Fragment>
            }
        </div>
    )
}