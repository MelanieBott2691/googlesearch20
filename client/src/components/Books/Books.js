import React, { Component } from 'react'
import Search from '../Search/Search'
import request from 'superagent'

class Books extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      searchField: ''
      //  Search Field is to udpate the state of app everytime type in box
    }
  }

  searchBook = e => {
    e.preventDefault()
    request
      .get('https://www.googleapis.com/books/v1/volumes')
      .query({ q: this.state.searchField })
      .then(data => {
        // console.log(data)
        this.setState({ books: [...data.body.items] })
      })
  }
  handleSubmit = e => {
  e.preventDefault()
  request
    .get('https://www.googleapis.com/books/v1/volumes')
    .query({ q: this.state.searchField })
    .then(data => {
      console.log(data)
      this.setState({ books: [...data.body.items] })
    })
}

// handleChange = e => {
//   this.setState({ searchField: e.target.value })
// }

handleSearch = e => {
  // console.log(e.target.value)
  this.setState({ searchField: e.target.value })
}

handleSort = e => {
  this.setState({ sort: e.target.value })
}


  render () {
      const filterBooks
 = this.state.books.sort((a,b) => {
     if(this.state.sort == "Newest") {
         console.log("newest")
         return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4));
     }


 })    return (
      <div>
        <Search searchBook={this.searchBook} handleSearch={this.handleSearch} />
      </div>
    )
  }
}
export default Books
