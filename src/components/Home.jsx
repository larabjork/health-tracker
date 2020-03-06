import React from 'react';
import { Container, Button }  from 'react-bootstrap';
import { Link } from 'react-router-dom';

const btnStyle = {
  backgroundColor: '#3C0142cd',
  borderColor: '#3C0142cd',
  color: 'white',
  borderRadius: '3px'
}


function Home(){
  return (
    <div>
      <Container>
        <h1>You are more than your diagnosis. </h1>
        <h2>And you have more than one story to tell about your life with MS.</h2>

            <Button style={btnStyle} to="/signin" renderAs={Link}>Sign In</Button>
            <br/>
            <Button style={btnStyle} to="/about" renderAs={Link}>About the App</Button>
        <h3> icon1 for doctor + icon2 for selfcare + icon3 for journal</h3>
      </Container>
    </div>
  )
}
 export default Home;
