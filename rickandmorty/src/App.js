import React from 'react';
import { Router } from '@reach/router';

import { Home } from './pages/Home';
import { Character } from './pages/Character';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <NotFound default />
      <Home path='/'/>
      <Character path='/character/:idCharacter'/>
    </Router>
  );
}

export default App;
