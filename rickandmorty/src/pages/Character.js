import React from 'react';

import { Link } from '@reach/router';
import { useIndividualData } from '../hooks/useDataApi';

import { Ring } from 'react-spinners-css';

export const Character = ({ idCharacter }) => {

    const [data, loading, error] = useIndividualData(`https://rickandmortyapi.com/api/character/${idCharacter}`);

    return (
        error 
            ? <h1>Error</h1>
            : loading
                ? <Ring color='#4cb5c3' />
                : <div className='container'>
                    <div className='row'>
                        <div className='col-sm-5'> 
                            <Link to='../../'>
                                <span className='return-text' role='img' aria-label='emoji'>👈 Go back</span>
                            </Link>
                            <img className='characterImg' src={data.image} alt={data.name} />
                        </div>

                        <div className='col-sm-6'>
                            <h1 className='characterName'>{data.name}</h1>
                            <div className='characterInfo-container'>
                                <h3 className='characterInfo'>Gender: {data.gender}</h3>
                            </div>
                            <div className='characterInfo-container'>
                                <h3 className='characterInfo'>Specie: {data.species}</h3>
                            </div>
                            <div className='characterInfo-container'>
                                <h3 className='characterInfo'>Status: {data.status}</h3>
                            </div>
                        </div>
                    </div>   
                </div> 
    )
}