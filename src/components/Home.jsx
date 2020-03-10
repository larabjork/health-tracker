import React from 'react';
import { Container, Row, Col, Image }  from 'react-bootstrap';

const gridCentering = {
  textAlign: "center",
}

const iconCaption = {
  paddingTop: "15px"
}



function Home(){
  return (
    <div>
      <Container>
        <h1>You are more than your diagnosis. </h1>
        <h2>And you have more than one story to tell about your life with MS.</h2>
        <Row style={gridCentering}>
          <Col xs={6} md={4}>
              <Image src="icons8-treatment-80.png"/><h6 style={iconCaption}><strong>Medical Care: </strong>Appointments, tests, medications, symptoms, relapses, progression</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image src="icons8-reflection-80.png"/><h6 style={iconCaption}><strong>Self Care: </strong>Diet, exercise, support groups, meditation, hobbies, therapy, acupuncture</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image src="icons8-journal-80.png"/><h6 style={iconCaption}><strong>Living: </strong>Getting through the day and figuring it all out!</h6>
          </Col>
        </Row>
        <h2><span className="brandName">My MS Stories</span> can help you keep track of it all!</h2>
      </Container>
    </div>
  )
}
 export default Home;
