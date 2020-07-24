import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import AppLayout from './containers/AppLayout';

import Login from './pages/Login';
import Forgot from './pages/Forgot';
import Register from './pages/Register';
import NotFound from './pages/errors/NotFound';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" name="Login" render={props => <Login {...props}/>} />
        <Route exact path="/forgot" name="Forgot" render={props => <Forgot {...props}/>} />
        <Route exact path="/register" name="Register" render={props => <Register {...props}/>} />

        <Route path="/" name="AppLayout" render={props => <AppLayout {...props}/>} />

        <Route exact path="*" name="NotFound" render={props => <NotFound {...props}/>} />
      </Switch>
    </Router>
  )
}