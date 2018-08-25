import React, { Component } from 'react';
import './App.css';
import {
  Button, 
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Table
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentWillMount() {
    this.setState({
      books: [
        {
          title: 'title1',
          author: 'author1',
          publisher: 'pub1',
          subject: 'sub1',
          iSBN: 'isbn1'
        },
        {
          title: 'title2',
          author: 'author2',
          publisher: 'pub2',
          subject: 'sub2',
          iSBN: 'isbn2'
        }
      ]
    });
  }

  render() {
    const books = this.state.books.map((book) => {
      return (
        <tr key={book.iSBN}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.publisher}</td>
          <td>{book.subject}</td>
          <td>{book.iSBN}</td>
          <td>
          <Button color='danger'>Remove</Button>
            </td>
        </tr>
      )
    });

    return (
      <div className="App">
        <Container>
          <h1>Personal Library</h1>
          <InputGroup>
            <Input placeholder="ISBN-10" />
            <InputGroupAddon addonType="append">
              <Button color="primary">Fetch My Book!</Button>
            </InputGroupAddon>
          </InputGroup>
            <Input placeholder="Search Library" />
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
              {books}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
