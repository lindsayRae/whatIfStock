import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Forms/Login'
import Trade from './pages/Trade/Trade'
import Nav from './components/Nav'



function App() {

  return (
    <div >
      <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/trade' exact component={Trade} />
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;