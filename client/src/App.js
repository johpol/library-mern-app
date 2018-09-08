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
    this.updateSearch = this.updateSearch.bind(this);
    this.state = {
      books: [],
      search: ''
    };
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

  updateSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const filterBooks = this.state.books.filter(book => {
      return book.title.indexOf(this.state.search) !== -1;
    });

    const books = filterBooks.map((book) => {
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
          <h1 className="bottom-margin">Personal Library</h1>
          <InputGroup className="bottom-margin">
            <Input placeholder="ISBN-10" />
            <InputGroupAddon addonType="append">
              <Button color="primary">Fetch My Book!</Button>
            </InputGroupAddon>
          </InputGroup>
            <Input placeholder="Search Library" 
            className="bottom-margin"
            value={this.state.search}
            onChange={this.updateSearch} />
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
