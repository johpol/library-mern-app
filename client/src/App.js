import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Alert, Container, InputGroup, InputGroupAddon, InputGroupButton, Input } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1>Personal Library</h1>
          <InputGroup>
            <Input placeholder="ISBN-10" />
            <InputGroupAddon addonType="append"><Button color="primary">Fetch My Book!</Button></InputGroupAddon>
          </InputGroup>
        </Container>
      </div>
    );
  }
}

export default App;
