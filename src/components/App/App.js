import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Header from '../Header';
// import Footer from '../Footer';
import AccountTargeting from '../AccountTargeting';
import './App.css';
// import SimpleForm from '../SimpleForm/SimpleForm';
import SimpleForm from '../SimpleForm';
import SingleComponent from '../SingleComponent/SingleComponent';
import StateLessComponent from '../StateLessComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
      <Route exact path='/' component={SingleComponent}></Route>  
      <Route exact path='/stateful' component={SimpleForm}></Route> 
      <Route exact path='/stateless' component={StateLessComponent}></Route>
      </Switch> 
  </Router>

      
    );
  }
}

export default App;
