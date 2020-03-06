import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container   }from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Error404 from './Error404';
import About from './About';
import GeneralJournal from './GeneralJournal';
import NewGeneralJournalRecordForm from './NewGeneralJournalRecordForm';
import MedHistoryDigest from './MedHistoryDigest';
import NewMedHistoryMilestoneForm from './NewMedHistoryMilestoneForm';

function App(){
  return (
    <div className="bodyDiv">
      <Header/>
      <Container>
        <Switch>
          <Route exact path='/' component={GeneralJournal} />
          <Route path='/mslife' component={NewGeneralJournalRecordForm} />
          <Route path='/medhistory' component={MedHistoryDigest} />
          <Route path='/medmilestone' component={NewMedHistoryMilestoneForm} />
          <Route path='/about' component={About} />
          <Route component={Error404} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
