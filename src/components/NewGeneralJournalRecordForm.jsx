import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import './../JournalForm.css';



function NewGeneralJournalRecordForm(props) {
  let _date = null;
  let _journalEntry = null;

  function handleNewJournalEntrySubmit(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_JOURNAL',
      id: v4(),
      date: _date.value,
      journalEntry: _journalEntry.value
    }
    dispatch(action)
    _date.value = '';
    _journalEntry.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewJournalEntrySubmit} className="paper">
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

export default connect()(NewGeneralJournalRecordForm);
