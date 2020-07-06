import React, { useEffect, useState } from 'react';

import { CharacterCard } from './CharacterCard';

const CharacterList = () => {

    const [characterData, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let isSuscribed = true;

        fetch('https://rickandmortyapi.com/api/character/')
            .then(data => data.json())
            .then(characters => {
                if(isSuscribed) {
                    setData(characters);
                    setLoading(false);
                }
            })
            .catch(err => {
                if(isSuscribed) {
                    setError(err);
                    setLoading(false);
                }
            })

        return () => isSuscribed = false;

    })

    return (
        <div className='row'>
            {
                error 
                    ? <h1>Error</h1>
                    : loading
                        ? <h1>Cargando..</h1>
                        : characterData.results.map(character => <div className='col-md-3' key={character.id}>
                                                                    <CharacterCard 
                                                                        name={character.name} 
                                                                        img={character.image}
                                                                    /> 
                                                                </div> 
                                                    )
            }
        </div>
    )
}

export default CharacterList;