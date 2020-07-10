import React from 'react';

import { Div } from './styles';

export const LocationCard = ({ name }) => {
    return (
        <Div className="card text-center">
            <div className="card-body">
                <h6>{name}</h6>
            </div>
        </Div>
    )
}