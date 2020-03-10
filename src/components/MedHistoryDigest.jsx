import React from 'react';
import MedHistoryMilestone from './MedHistoryMilestone';

const masterMedHistoryDigest = [
  {
      date: "7/5/2010",
      historyEvent: "Initial symptoms"
  }
]




function MedHistoryDigest(){
  return (
    <div>
      <h1>My Medical History</h1>
      {masterMedHistoryDigest.map((entry, index) =>
        <MedHistoryMilestone date={entry.date}
          historyEvent={entry.historyEvent}
          key={index} />
      )}

    </div>
  )
};

export default MedHistoryDigest;
