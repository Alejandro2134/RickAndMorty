import React, { useState } from 'react';

import EpisodeList from '../components/EpisodeList';
import LocationList from '../components/LocationList';
import { CharacterList } from '../components/CharacterList';

import { MenuItem, Img } from './styles/styles';
import Logo from '../img/logo.svg';
import './styles/style.css';

const Home = () => {

    const [character, setCharacter] = useState(true);
    const [location, setLocation] = useState(false);
    const [episode, setEpisode] = useState(false);

    const handleClickCharacter = () => {
        setCharacter(true);
        setLocation(false);
        setEpisode(false);
    }

    const handleClickLocation = () => {
        setCharacter(false);
        setLocation(true);
        setEpisode(false);
    }

    const handleClickEpisode = () => {
        setCharacter(false);
        setLocation(false);
        setEpisode(true);    
    }

    return (
        <React.Fragment>
            <Img src={Logo} className='img-fluid rounded mx-auto d-block' alt='logo'/>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <MenuItem className="nav-link" active={character} onClick={handleClickCharacter}>CHARACTERS</MenuItem>
                </li>
                <li className="nav-item">
                    <MenuItem className="nav-link" active={location} onClick={handleClickLocation}>LOCATIONS</MenuItem>
                </li>
                <li className="nav-item">
                    <MenuItem className="nav-link" active={episode} onClick={handleClickEpisode}>EPISODES</MenuItem>
                </li>
            </ul> 

            <div className='container p-4'>
                {character && <CharacterList />}
                {location && <LocationList />}
                {episode && <EpisodeList />}
            </div>
        </React.Fragment>
    )
}

export default Home;