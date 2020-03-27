import React, { Component } from 'react';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

const loginUrl = "http://localhost:3000/login"

class App extends Component {
  state = {
    user: {}
  }

  login = (user) => {
    return fetch(loginUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(result => {
      localStorage.setItem("token", result.token)
      this.setState({user: result.user_id})
  
    })
  }

  render() {
    return (
      <div className="App">
      <Switch>
        <PrivateRoute exact path='/' user={this.state.user}/>
        <Route path='/login' render={(props) => <Login {...props} login={this.login} />}/>
        <Route render={() => <Redirect to="/"/>}/>
      </Switch>  
      </div>
    );
  } 
}

export default App;
