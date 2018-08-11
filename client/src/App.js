import React, { Component } from 'react';
import './App.css';
import { Button, Container, InputGroup, InputGroupAddon, Input, Table } from 'reactstrap';

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
          <Table striped>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Publisher</th>
                <th>Subject</th>
                <th>ISBN</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
