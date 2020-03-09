import React from 'react';
import GeneralJournalRecord from './GeneralJournalRecord';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const btnStyle = {
  backgroundColor: '#3C0142cd',
  borderColor: '#3C0142cd',
  color: 'white',
  borderRadius: '3px'
}

function GeneralJournal(props){
  return (
    <div>
      <h1>My Anything-Goes-Here Journal</h1>
      {props.generalJournal.map((entry, index) =>
        <GeneralJournalRecord date={entry.date}
          journalEntry={entry.journalEntry}
          key={index} />
      )}
    </div>
  )
};

GeneralJournal.propTypes = {
  generalJournal: PropTypes.array
};

export default GeneralJournal;
