import React from 'react';
import { Container, Row, Col, Image }  from 'react-bootstrap';


const gridCentering = {
  textAlign: "center",
}



function Home(){
  return (
    <div>
      <Container>
        <h1>You are more than your diagnosis. </h1>
        <h2>And you have more than one story to tell about your life with MS.</h2>
        <Row style={gridCentering}>
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
        <Row style={gridCentering}>
          <Col xs={6} md={4}>
            <h6>You go to the doctor(s)</h6>
          </Col>
          <Col xs={6} md={4}>
            <h6>You take care of yourself</h6>
          </Col>
          <Col xs={6} md={4}>
            <h6>You have a life</h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
 export default Home;
