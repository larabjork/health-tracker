import React from 'react';
import PropTypes from 'prop-types';

function NewGeneralJournalRecordForm(props){
  let _date = null;
  let _journalEntry = null;

  function handleNewJournalEntrySubmit(event) {
    event.preventDefault();
    props.onNewJournalEntryCreation({date: _date.value, journalEntry: _journalEntry.value});
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

export default NewGeneralJournalRecordForm;
