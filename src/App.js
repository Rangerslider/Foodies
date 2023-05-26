import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Home from './components/Main/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './components/Main/List.js';
import Order from './components/Main/Order.js';
import Contact from './components/Main/Contact.js';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/list' component={List} />
          <Route path='/order' component={Order} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;