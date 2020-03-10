import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container   }from 'react-bootstrap';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './Header';
import Error404 from './Error404';
import About from './About';
import Home from './Home';
import Signin from './Signin';
import Dashboard from './Dashboard';
import GeneralJournal from './GeneralJournal';
import NewEntryControl from './NewEntryControl';
import MedHistoryDigest from './MedHistoryDigest';
import NewMedHistoryMilestoneForm from './NewMedHistoryMilestoneForm';
import MSExperienceDigest from './MSExperienceDigest';
import NewMSExperienceMilestoneForm from './NewMSExperienceMilestoneForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {



  render(){

    return (
      <div className="bodyDiv">
        <Header/>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path='/signin' component={Signin} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/journal' render={()=><GeneralJournal masterGeneralJournal={this.props.masterGeneralJournal} />} />
            <Route path='/journal-entry' render={()=><NewEntryControl/>} />
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
}

App.propTypes = {
  masterGeneralJournal: PropTypes.object
};

const mapStateToProps = state =>{
  return {
    masterGeneralJournal: state.masterGeneralJournal
  }
}

export default withRouter (connect(mapStateToProps)(App));
