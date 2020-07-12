import React, { useState } from 'react';
import { Link } from '@reach/router';

import { CharacterCard } from '../CharacterCard';
import { useDataApi } from '../../hooks/useDataApi';

import { Ring } from 'react-spinners-css';
import { Button } from './styles';

export const CharacterList = () => {

    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/')

    const [data, loading, error] = useDataApi(url);

    const handleClick = () => {
        setUrl(data.info.next);
    }

    return (
        <div className='row justify-content-center'>
            {
                error 
                    ? <h1>Error</h1>
                    : <React.Fragment>
                        {data.results.map(character => <div className='col-md-3' key={character.id}>
                                                            <Link to={`/character/${character.id}`}>
                                                                <CharacterCard 
                                                                    name={character.name} 
                                                                    img={character.image}
                                                                /> 
                                                            </Link>     
                                                        </div> 
                                          )
                        }
                        {
                            loading
                                ? <Ring color='#4cb5c3' />
                                : data.info.next
                                    ? <Button onClick={handleClick}>More Characters!</Button>
                                    : <React.Fragment />
                        }
                    </React.Fragment>        
            }
        </div>
    )
}