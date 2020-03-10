import React from 'react';
import GeneralJournalRecord from './GeneralJournalRecord';
import PropTypes from 'prop-types';



function GeneralJournal(props){
  return (
    <div>
      <h1>My Anything-Goes-Here Journal</h1>
      {Object.keys(props.generalJournal).map(function(entryId) {
        const entry = props.generalJournal[entryId];
        return <GeneralJournalRecord date={entry.date}
        journalEntry={entry.JournalEntry}
        key={entryId}
        entryId={entryId} />;
    })}
    </div>
  );
};

GeneralJournal.propTypes = {
  generalJournal: PropTypes.object,
  currentRouterPath: PropTypes.string
};

export default GeneralJournal;
