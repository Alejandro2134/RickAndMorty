import React from 'react';

import { Div } from './styles';

export const CharacterCard = ({ name, img }) => {

    return (
        <Div className="card text-center">
            <img className="card-img-top img-fluid" src={img} alt={name} />
            <div className="card-body">
                <h6 className="card-title">{name}</h6>
            </div>
        </Div>
    )
}