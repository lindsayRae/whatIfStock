import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Nav from './components/Nav'



function App() {

  return (
    <div >
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;