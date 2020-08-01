import React, { Component } from 'react'
import Search from '../Search/Search'

class Books extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      searchField: ''
      //  Search Field is to udpate the state of app everytime type in box
    }
  }
  handleSearch = e => {
    // console.log(e.target.value)
    this.setState({ searchField: e.target.value })
  }

  render () {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
      </div>
    )
  }
}
export default Books
