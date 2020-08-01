import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import API from '../utils/API'
import { BookList, BookListItem } from '../components/BookList'
import { Container, Row, Col } from '../components/Grid'
import Search from '../components/Search/Search'

class Books extends Component {
  state = {
    book: [],
    bookSearch: ''
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err))
    console.log(this.state.books)
  }

  handleSave = ({ target }) => {
    const parent = target.parentElement
    console.log(parent)
    const title = parent.getElementsByClassName('title')[0].innerHTML
    const synopsys = parent.getElementsByClassName('synopsys')[0].innerHTML
    const link = parent.getElementsByClassName('link')[0].innerHTML
    console.log(title)
    console.log(synopsys)
    console.log(link)
  }

  render () {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size='md-12'>
              <Search
                bookSearch={this.state.bookSearch}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
          </Row>
          <Row>
            <Col size='xs-12'>
              {!this.state.books.length ? (
                <h1 className='text-center'>No Books to Display</h1>
              ) : (
                <BookList>
                  {this.state.books.map(recipe => {
                    return (
                      <BookListItem
                        key={recipe.id}
                        title={recipe.volumeInfo.title}
                        href={recipe.volumeInfo.infoLink}
                        ingredients={recipe.volumeInfo.description}
                        thumbnail={recipe.volumeInfo.imageLinks.smallThumbnail}
                        handleSave={this.handleSave}
                      />
                    )
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Books
