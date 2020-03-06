import React from 'react';
import { Container, Button, Form, Row, Col }  from 'react-bootstrap';
import { Link } from 'react-router-dom';

const btnStyle = {
  backgroundColor: '#3C0142cd',
  borderColor: '#3C0142cd',
  color: 'white',
  borderRadius: '3px'
}

function Dashboard() {
  return(
    <div>
      <Container>
        <h1>My Story Dashboard</h1>
        <h2>accordion style views of three different journals; most recent entries showing by default?</h2>
        <h1>I'm ready to add to my story!</h1>
        <Form>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={5}>
                What do you want to add?
              </Form.Label>
              <Col sm={7}>
                <Form.Check
                  type="radio"
                  label="Medical history milestone"
                  name="formEntryTypeRadio"
                  id="formHorizontalRadios1"
                  />
                <Form.Check
                  type="radio"
                  label="Self care milestone"
                  name="formEntryTypeRadio"
                  id="formHorizontalRadios2"
                  />
                <Form.Check
                  type="radio"
                  label="Journal entry"
                  name="formEntryTypeRadio"
                  id="formHorizontalRadios3"
                  />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Form.Label as="legend" column sm={5}>
              Do you feel like talking or typing?
            </Form.Label>
            <Col sm={7}>
              <Form.Check
                type="radio"
                label="Talking"
                name="formEntryMechanismRadio"
                id="formHorizontalRadios4"
                />
              <Form.Check
                type="radio"
                label="Typing"
                name="formEntryMechanismRadio"
                id="formHorizontalRadios5"
                />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" style={btnStyle}>Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default Dashboard;
