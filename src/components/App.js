import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container   }from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Error404 from './Error404';
import About from './About';
import Home from './Home';
import GeneralJournal from './GeneralJournal';
import NewGeneralJournalRecordForm from './NewGeneralJournalRecordForm';
import MedHistoryDigest from './MedHistoryDigest';
import NewMedHistoryMilestoneForm from './NewMedHistoryMilestoneForm';
import MSExperienceDigest from './MSExperienceDigest';
import NewMSExperienceMilestoneForm from './NewMSExperienceMilestoneForm';

function App(){
  return (
    <div className="bodyDiv">
      <Header/>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route path='/journal' component={GeneralJournal} />
          <Route path='/journal-entry' component={NewGeneralJournalRecordForm} />
          <Route path='/med-digest' component={MedHistoryDigest} />
          <Route path='/med-milestone' component={NewMedHistoryMilestoneForm} />
          <Route path='/exp-digest' component={MSExperienceDigest} />
          <Route path='/exp-milestone' component={NewMSExperienceMilestoneForm} />
          <Route path='/about' component={About} />
          <Route component={Error404} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
