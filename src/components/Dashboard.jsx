import React from 'react';
import { Container, Button }  from 'react-bootstrap';
import PropTypes from 'prop-types';

const btnStyle = {
  backgroundColor: '#3C0142cd',
  borderColor: '#3C0142cd',
  color: 'white',
  borderRadius: '3px'
}

function Dashboard(props) {
  return(
    <div>
      <Container>
        <h1>Story Dashboard</h1>
        <h2>accordion style views of three different journals; most recent entries showing by default?</h2>
        <h1>Ready to add to your story?</h1>
        <Button onClick={props.onStartNewJournalEntry} style={btnStyle}>Journal Time!</Button>



      </Container>
    </div>
  )
}

Dashboard.propTypes ={
  onStartNewJournalEntry: PropTypes.func
};

export default Dashboard;
