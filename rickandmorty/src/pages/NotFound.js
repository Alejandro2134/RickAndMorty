import React from 'react';
import { Link } from '@reach/router';

import Logo from '../img/logo.svg';
import './styles/styles.css'

export const NotFound = () => {
    return (
        <React.Fragment>
            <div className='not-found-container'>
                <img className='img-fluid not-found-img' src={Logo} alt='logo'/>
                <span className='not-found-text' role='img' aria-label='emoji'>Error 404 | Page not found 😢</span>
                <Link to='../'> 
                    <span className='return-text' role='img' aria-label='emoji'>👈 Go back</span>
                </Link> 
            </div>
        </React.Fragment>
    )
}