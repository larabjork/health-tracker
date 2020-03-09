import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { connect } from 'react-redux';



class NewGeneralJournalRecordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterGeneralJournal: []
    };
    this.handleAddingNewJournalEntry = this.handleAddingNewJournalEntry.bind(this);
  }

function NewGeneralJournalRecordForm(props){

  let _date = null;
  let _journalEntry = null;

  function handleNewJournalEntrySubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const action = {
      type: 'ADD_JOURNAL',
      id: v4(),
      date: _date.value,
      journalEntry: _journalEntry.value
    }
    dispatch(action)
    props.onNewJournalEntryCreation({date: _date.value, journalEntry: _journalEntry.value, id: v4()});
    _date.value = '';
    _journalEntry.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewJournalEntrySubmit}>
        <input
          type='text'
          id='date'
          placeholder='Date'
          ref={(input) => {_date = input;}}/>
        <textarea
          id='journalEntry'
          placeholder="What's happening?"
          ref={(textarea) => {_journalEntry = textarea;}}/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  )
}

NewGeneralJournalRecordForm.propTypes = {
  onNewJournalEntryCreation: PropTypes.func
}

NewGeneralJournalRecordForm = connect()(NewGeneralJournalRecordForm);

export default NewGeneralJournalRecordForm;
