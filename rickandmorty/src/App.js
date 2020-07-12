import React from 'react';
import { Router } from '@reach/router';

import { Home } from './pages/Home';
import { Character } from './pages/Character';
import { Episode } from './pages/Episode';
import { Location } from './pages/Location';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <NotFound default />
      <Home path='/'/>
      <Character path='/character/:idCharacter'/>
      <Episode path='/episode/:idEpisode'/>
      <Location path='/location/:idLocation'/>
    </Router>
  );
}

export default App;
