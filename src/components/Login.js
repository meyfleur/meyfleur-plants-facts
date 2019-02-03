import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
    state = {
        username: null,
        pwd: null
    }

    render () {
        return (
            <Col md={{ span: 6, offset: 3 }}>
                <Card className="m-auto">
                    <Form className="p-3">
                        <Form.Group controlId="formEmailUsername">
                            <Form.Label>Email or Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email or username" />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Col>
        )
    }
}

export default Login