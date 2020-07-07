import React, { useState } from 'react';

import { CharacterCard } from '../CharacterCard';
import { useDataApi } from '../../hooks/useDataApi';

import { Button } from './styles';

export const CharacterList = () => {

    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/')

    const [characterData, loading, error] = useDataApi(url);

    const handleClick = () => {
        setUrl(characterData.info.next);
    }

    return (
        <div className='row justify-content-center'>
            {
                error 
                    ? <h1>Error</h1>
                    : loading
                        ? <h1>Cargando..</h1>
                        : <React.Fragment>
                            {characterData.results.map(character => <div className='col-md-3' key={character.id}>
                                                                        <CharacterCard 
                                                                            name={character.name} 
                                                                            img={character.image}
                                                                        /> 
                                                                    </div> 
                                                      )}
                            <Button onClick={handleClick}>More Characters!</Button>
                        </React.Fragment>        
            }
        </div>
    )
}