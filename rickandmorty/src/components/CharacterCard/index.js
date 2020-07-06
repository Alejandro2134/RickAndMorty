import React, { useEffect } from 'react';

import { Img } from './styles';

export const CharacterCard = () => {

    useEffect(() => {


    })

    return (
        <div className="card">
            <Img className="card-img-top" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Character" />
            <div className="card-body">
                <h5 className="card-title">Rick Sanchez</h5>
            </div>
        </div>
    )
}