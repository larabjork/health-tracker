import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container   }from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import GeneralJournal from './GeneralJournal';
import NewGeneralJournalRecordForm from './NewGeneralJournalRecordForm';

function App(){
  return (
    <div className="bodyDiv">
      <Header/>
      <Switch>
        <Route exact path='/' component={GeneralJournal} />
        <Route path='/journal-entry' component={NewGeneralJournalRecordForm} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
