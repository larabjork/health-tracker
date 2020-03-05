import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container   }from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';

function App(){
  return (
    <div className="bodyDiv">
      <Header/>
      <About/>
    </div>
  );
}

export default App;
