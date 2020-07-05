import React, { useState } from 'react';

import EpisodeList from '../components/EpisodeList';
import LocationList from '../components/LocationList';
import CharacterList from '../components/CharacterList';

import { MenuItem } from './styles/styles';
import Logo from '../img/logo.png';

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

            <img src={Logo} alt='logo'/>

            <div>
                <MenuItem active={character} onClick={handleClickCharacter}>Characters</MenuItem>
                <MenuItem active={location} onClick={handleClickLocation}>Locations</MenuItem>
                <MenuItem active={episode} onClick={handleClickEpisode}>Episodes</MenuItem>
            </div>

            <div>
                {character && <CharacterList />}
                {location && <LocationList />}
                {episode && <EpisodeList />}
            </div>
        </React.Fragment>
    )
}

export default Home;