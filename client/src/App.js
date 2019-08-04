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

const bkMock = {
  "data": [
    {
      "_id": "5c9eb5e584de6e4220cf35b6",
      "type": "books",
      "__v": 0,
      "attributes": {
        "title": "Spring Boot in Action",
        "author": "Craig Walls",
        "publisher": "Manning Publications",
        "isbn": "1617292540"
      }
    },
    {
      "_id": "5cedd42ae425082cb084e5a9",
      "type": "books",
      "__v": 0,
      "attributes": {
        "title": "Spring Boot in Action",
        "author": "Craig Walls",
        "publisher": "Manning Publications",
        "isbn": "1617292540"
      }
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = {
      books: {data:[]},
      search: ''
    };
  }

  componentDidMount() {
    // fetch('/books')
    //   .then(response => response.json())
    //   .then(json => this.setState({
    //     books: json.data
    //   }));
    this.setState({
      books: bkMock
    })
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const filterBooks = this.state.books.data.filter(book => {
      return book.attributes.title.toLowerCase().indexOf(this.state.search) !== -1;
    });

    const books = filterBooks.map((book, index) => {
      return (
        <tr key={index}>
          <td>{book.attributes.title}</td>
          <td>{book.attributes.author}</td>
          <td>{book.attributes.publisher}</td>
          <td>{book.attributes.subject}</td>
          <td>{book.attributes.iSBN}</td>
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
