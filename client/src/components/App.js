import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Header />
        </Switch>
    </BrowserRouter>
  );
}

export default App;