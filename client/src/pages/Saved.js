// import React, { Component } from 'react'
// import API from '../../utils/API'

// // Import components
// import Results from './components/Results'

// class Saved extends Component {
//   state = {
//     savedBooks: []
//   }
//   componentDidMount () {
//     API.savedBooks()
//       .then(savedBooks => this.setState({ savedBooks: savedBooks }))
//       .catch(err => console.error(err))
//   }
//   render () {
//     return (
//       <div className='container'>
//         <h2>Saved Books</h2>
//         <Results books={this.state.savedBooks} />
//       </div>
//     )
//   }
// }
// export default Saved
import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import API from '../utils/API'
import { RecipeList, RecipeListItem } from '../components/RecipeList'
import { Container, Row, Col } from '../components/Grid'
import Search from '../components/Search/Search'

class Saved extends Component {
  state = {
    book: []
  }

  componentDidMount () {
    this.getSavedBooks()
  }
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size='xs-12'>
              {!this.state.book.length ? (
                <h1 className='text-center'>No Books to Display</h1>
              ) : (
                <BookList>
                  {this.state.book.map(book => {
                    return (
                      <BookListItem
                        key={book.id}
                        title={book.title}
                        // href={book.volumeInfo.infoLink}
                        description={book.synopsis}
                        // thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
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

export default Saved
