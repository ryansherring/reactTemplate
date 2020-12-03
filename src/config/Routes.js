// Dependencies
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// Components
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Landing from '../pages/Landing/Landing';

const Routes = () => {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <Landing />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;
