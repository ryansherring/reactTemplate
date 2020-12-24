// Dependencies
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// Components
import MainApp from '../pages/mainApp/mainApp';
import About from '../pages/About/About';
import Landing from '../pages/Landing/Landing';

const Routes = () => {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/mainapp">
        <MainApp />
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
