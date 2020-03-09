import React from 'react';
import GeneralJournalRecord from './GeneralJournalRecord';
import PropTypes from 'prop-types';



function GeneralJournal(props){
  return (
    <div>
      <h1>My Anything-Goes-Here Journal</h1>
      {props.generalJournal.map((entry) =>
        <GeneralJournalRecord date={entry.date}
          journalEntry={entry.journalEntry}
          key={entry.id} />
      )}
    </div>
  )
};

GeneralJournal.propTypes = {
  generalJournal: PropTypes.array
};

export default GeneralJournal;
