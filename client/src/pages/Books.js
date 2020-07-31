// import React, { Component } from 'react'
// import Jumbotron from '../components/Jumbotron'
// import API from '../utils/API'
// import { BookList, BookListItem } from '../components/BookList'
// import { Container, Row, Col } from '../components/Grid'
// import Search from '../components/Search/Search'


import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron/index'
import Card from '../components/Card'
import Form from '../components/Form'
import Book from '../components/Book'
import Footer from '../components/Footer'
import API from '../utils/API'
import { Col, Row, Container } from '../components/Grid'
import { List } from '../components/List'

class Books extends Component {
  state = {
    books: [],
    bookSearch: '',
    message: "Search For A Book!"
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  getBooks = () => {
    API.getBooks(this.state.bookSearch).then(res =>
      this.setState({
        books: res.data
      }))
  }
  .catch(() => 
  this.setState({
    books: [],
    message: "No New Books Found"
  })
  )
}
  // handleFormSubmit = event => {
  //   event.preventDefault()
  //   API.getBooks(this.state.bookSearch)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err))
  //   console.log(this.state.books)
  // }
handleFormSubmit = event => {
  event.preventDefault();
  this.getBooks();
};
handleBookSave = id => {
  googleId: book.id,
  title: book.volumeInfo.title,
  subtitle: book.volumeInfo.subtitle,
  link: book.volumeInfo.infoLink,
  authors: book.volumeInfo.authors,
  description: book.volumeInfo.description,
  image: book.volumeInfo.imageLinks.thumbnail
}).then(() => this.getBooks())
}

render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
  // handleSave = ({ target }) => {
  //   const parent = target.parentElement
  //   console.log(parent)
  //   const title = parent.getElementsByClassName('title')[0].innerHTML
  //   const synopsys = parent.getElementsByClassName('synopsys')[0].innerHTML
  //   const link = parent.getElementsByClassName('link')[0].innerHTML
  //   console.log(title)
  //   console.log(synopsys)
  //   console.log(link)
//   }

//   render () {
//     return (
//       <div>
//         <Jumbotron />
//         <Container>
//           <Row>
//             <Col size='md-12'>
//               <Search
//                 bookSearch={this.state.bookSearch}
//                 handleInputChange={this.handleInputChange}
//                 handleFormSubmit={this.handleFormSubmit}
//               />
//             </Col>
//           </Row>
//           <Row>
//             <Col size='xs-12'>
//               {!this.state.books.length ? (
//                 <h1 className='text-center'>No Books to Display</h1>
//               ) : (
//                 <BookList>
//                   {this.state.books.map(recipe => {
//                     return (
//                       <BookListItem
//                         key={recipe.id}
//                         title={recipe.volumeInfo.title}
//                         href={recipe.volumeInfo.infoLink}
//                         ingredients={recipe.volumeInfo.description}
//                         thumbnail={recipe.volumeInfo.imageLinks.smallThumbnail}
//                         handleSave={this.handleSave}
//                       />
//                     )
//                   })}
//                 </BookList>
//               )}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     )
//   }
// }

export default Books
