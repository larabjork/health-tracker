import React from 'react';
import { Container, Button, Row, Col, Image }  from 'react-bootstrap';
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
        <ul>
          <li>You go to the doctor(s)</li>
          <li>You take care of yourself</li>
          <li>You have a life</li>
        </ul>
        <Row>
    <Col xs={6} md={4}>
      <Image src="icons8-treatment-64.png"/>
    </Col>
    <Col xs={6} md={4}>
      <Image src="icons8-reflection-40.png"/>
    </Col>
    <Col xs={6} md={4}>
      <Image src="icons8-journal-80.png"/>
    </Col>
  </Row>

            <Button style={btnStyle} to="/signin" renderAs={Link}>Sign Me In</Button>
            <br/>
            <br/>
            <Button style={btnStyle} to="/about" renderAs={Link}>Tell Me More</Button>
      </Container>
    </div>
  )
}
 export default Home;
