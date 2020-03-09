import React from 'react';
import NewGeneralJournalRecordForm from './NewGeneralJournalRecordForm';
import Dashboard from './Dashboard';

class NewEntryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      journalFormVisibleOnPage: false
    };
    this.handleStartNewJournalEntry = this.handleStartNewJournalEntry.bind(this);
  }

  handleStartNewJournalEntry(){
    this.setState({journalFormVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.journalFormVisibleOnPage){
      currentlyVisibleContent = <NewGeneralJournalRecordForm />
    } else {
      currentlyVisibleContent = <Dashboard onStartNewJournalEntry={this.handleStartNewJournalEntry}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewEntryControl;
