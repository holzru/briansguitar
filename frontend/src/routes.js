import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App } from './components/app';
import { Contact } from './components/contact';
import { Reviews } from './components/reviews';
import { Splash } from './components/splash';
import { Videos } from './components/videos';


export default (
  <Route path='/' component={App}>
    <IndexRoute component={Splash} />
    <Route path='/splash' component={Splash} />
    <Route path='/contact' component={Contact} />
    <Route path='/reviews/:id' component={Reviews} />
    <Route path='/videos' component={Videos} />
  </Route>
);
