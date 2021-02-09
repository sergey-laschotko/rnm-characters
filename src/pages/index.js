import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Home';
import CharacterPage from './Character';
import NotFoundPage from './NotFound';

const Pages = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/character" component={CharacterPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Pages;
