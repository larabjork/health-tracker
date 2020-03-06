
import React from 'react';
import { Container, Button, Form }  from 'react-bootstrap';
import { Link } from 'react-router-dom';

const btnStyle = {
  backgroundColor: '#3C0142cd',
  borderColor: '#3C0142cd',
  color: 'white',
  borderRadius: '3px'
}


function Signin(){
  return (
    <div>
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button style={btnStyle} type="submit">
            Submit
          </Button>
        </Form>

      </Container>
    </div>
  )
}
export default Signin;
