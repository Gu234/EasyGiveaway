import React from 'react';
import Home from './components/Home';
import GiveStuff from './components/GiveStuff';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import SignUp from './components/SignUp';
import './scss/main.scss'
import HomeHeader from './HomeHeader';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <HomeHeader/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/oddaj-rzeczy" component={GiveStuff} />
        <Route path="/logowanie" component={LogIn} />
        <Route path="/rejstracja" component={SignUp} />
        <Route path="/wylogowano" component={LogOut} />
      </Switch>
    </HashRouter>
  );
}

export default App;
