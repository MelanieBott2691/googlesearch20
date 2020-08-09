import React, { Component } from 'react';
import API from '../utils/API';
import { Container, Row, Col } from '../components/Grid/Grid';
import { BookList, BookListItem } from '../components/BookList/BookList';

class Save extends Component {
  state = {
    savedBooks: []
  };

  // loads saved books when Saved page loads
  componentDidMount() {
    this.getBooks();
    // this.loadBooks();
  }

  // loads books from database
  // loadBooks = (event) => {
  getBooks = () => {
    API.getBooks()
      .then((res) => {
        this.setState({ savedBooks: res.data }, function () {
          console.log(this.state.savedBooks);
        });
      })
      .catch((err) => console.log(err));
  };

  handleBookDelete = (id) => {
    API.deleteBook(id).then((res) => this.getBooks());
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="xs-12">
              <BookList>
                {this.state.savedBooks.map((book) => {
                  return (
                    <BookListItem
                      key={book._id}
                      title={book.title}
                      authors={book.authors}
                      link={book.link}
                      description={book.description}
                      image={book.image}
                      id={book._id}
                      loadBooks={this.loadBooks}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger md-2">
                          Delete
                        </button>
                      )}
                    />
                  );
                })}
              </BookList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Save;
