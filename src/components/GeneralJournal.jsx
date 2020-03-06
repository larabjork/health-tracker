import React from 'react';
import GeneralJournalRecord from './GeneralJournalRecord';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const masterGeneralJournal = [
  {
      date: "7/5/2010",
      journalEntry: "This is when it all started, sort of."
  },
  {
      date: "2/12/2018",
      journalEntry: "I can't believe I've come this far"
  }
]
const btnStyle = {
  backgroundColor: '#3C0142cd',
  borderColor: '#3C0142cd',
  color: 'white',
  borderRadius: '3px'
}

function GeneralJournal(){
  return (
    <div>
      <h1>My Anything-Goes-Here Journal</h1>
      {masterGeneralJournal.map((entry, index) =>
        <GeneralJournalRecord date={entry.date}
          journalEntry={entry.journalEntry}
          key={index} />
      )}
      <Button style={btnStyle} to="/journal-entry" renderAs={Link}>Add New Journal Entry</Button>

    </div>
  )
};

export default GeneralJournal;
