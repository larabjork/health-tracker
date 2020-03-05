import React from 'react';
import GeneralJournalRecord from './GeneralJournalRecord';

const masterGeneralJournal = [
  {
      date: "7/5/2010",
      journalEntry: "This is when it all started, sort of."
  }
]

function GeneralJournal(){
  return (
    <div>
      {masterGeneralJournal.map((entry, index) =>
        <GeneralJournalRecord date={entry.date}
          journalEntry={entry.journalEntry}
          key={index} />
      )}
    </div>
  )
};

export default GeneralJournal;
