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
            <InputGroupAddon addonType="prepend">
            <InputGroupButton>Fetch My Book!</InputGroupButton></InputGroupAddon>
          </InputGroup>
        </Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
