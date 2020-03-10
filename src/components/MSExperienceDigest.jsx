import React from 'react';
import MSExperienceMilestone from './MSExperienceMilestone';


const masterMSExperienceDigest = [
  {
      date: "8/13/2012",
      experience: "First acupuncture appointment"
  }
]

function MSExperienceDigest(){
  return (
    <div>
      <h1>My Selfcare History</h1>
      {masterMSExperienceDigest.map((entry, index) =>
        <MSExperienceMilestone date={entry.date}
          experience={entry.historyEvent}
          key={index} />
      )}

    </div>
  )
};

export default MSExperienceDigest;
