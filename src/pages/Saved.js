import React, { Component } from 'react';
import { BookList, BookListItem } from '../components/BookList/BookList';
import { Container, Row, Col } from '../components/Grid/Grid';
import API from '../utils/API';

class Saved extends Component {
  state = {
    savedBooks: []
  };

  // load saved books when Saved page loads
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = (event) => {
    API.getBooks()
      .then((res) => {
        this.setState({ savedBooks: res.data }, function () {
          console.log(this.state.savedBooks);
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <BookList>
                {this.state.savedBooks.map((book) => {
                  return (
                    <BookListItem
                      id={book._id}
                      loadBooks={this.loadBooks}
                      key={book._id}
                      title={book.title}
                      authors={book.authors}
                      link={book.link}
                      description={book.description}
                      image={book.image}
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

export default Saved;
