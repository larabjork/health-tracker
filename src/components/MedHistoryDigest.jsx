import React from 'react';
import MedHistoryMilestone from './MedHistoryMilestone';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const masterMedHistoryDigest = [
  {
      date: "7/5/2010",
      historyEvent: "Initial symptoms"
  }
]

const btnStyle = {
  backgroundColor: '#3C0142cd',
  borderColor: '#3C0142cd',
  color: 'white',
  borderRadius: '3px'
}


function MedHistoryDigest(){
  return (
    <div>
      <h1>My Medical History</h1>
      {masterMedHistoryDigest.map((entry, index) =>
        <MedHistoryMilestone date={entry.date}
          historyEvent={entry.historyEvent}
          key={index} />
      )}
      <Button style={btnStyle} to="/med-milestone" renderas={Link}>Add New Medical Milestone</Button>
    </div>
  )
};

export default MedHistoryDigest;
