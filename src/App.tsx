import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Login from './components/Login'
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row> 
            <Login />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
