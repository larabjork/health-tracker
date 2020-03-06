import React from 'react';
import GeneralJournalRecord from './GeneralJournalRecord';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const masterGeneralJournal = [
  {
      date: "7/5/2010",
      journalEntry: "This is when it all started, sort of."
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
