import React from 'react';
import GeneralJournalRecord from './GeneralJournalRecord';
import PropTypes from 'prop-types';



function GeneralJournal(props){
  console.log(props);
  return (
    <div>
      <h1>My Anything-Goes-Here Journal</h1>
      {Object.keys(props.masterGeneralJournal).map(function(entryId) {
        const entry = props.masterGeneralJournal[entryId];
        return <GeneralJournalRecord date={entry.date}
        journalEntry={entry.journalEntry}
        key={entryId}
        entryId={entryId} />;
    })}
    </div>
  );
};

GeneralJournal.propTypes = {
  masterGeneralJournal: PropTypes.object,
  currentRouterPath: PropTypes.string
};

export default GeneralJournal;
