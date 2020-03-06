import React from 'react';
import MSExperienceMilestone from './MSExperienceMilestone';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const masterMSExperienceDigest = [
  {
      date: "8/13/2012",
      experience: "First acupuncture appointment"
  }
]
const btnStyle = {
  backgroundColor: '#3C0142cd',
  borderColor: '#3C0142cd',
  color: 'white',
  borderRadius: '3px'
}

function MSExperienceDigest(){
  return (
    <div>
      <h1>My Selfcare History</h1>
      {masterMSExperienceDigest.map((entry, index) =>
        <MSExperienceMilestone date={entry.date}
          experience={entry.historyEvent}
          key={index} />
      )}

      <Button style={btnStyle} to="/exp-milestone" renderAs={Link}>Add New Experience Milestone</Button>
    </div>
  )
};

export default MSExperienceDigest;
