import axios from 'axios';

const BaseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
// The books method retrieves books from the server Google Books
// It accepts a "query" or term to search the recipe api for
export default {
  searchBooks: function (query) {
    return axios.get(BaseUrl + query);
  },
  getBooks: function (query) {
    // return axios.get('/api/books', { params: { q: query } })
    return axios.get('/api/google', { params: { query: 'title:' + query } });
  },
  deleteBook: function (id) {
    return axios.get('/api/books' + id);
  },
  savedBooks: function (bookData) {
    return axios.post('/api/books', bookData);
  }
};
