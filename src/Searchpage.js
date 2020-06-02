import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './components/Book'
import {NONE} from './Constant'

export default class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  state ={
    value: "",
    books:[]
  }


  handleChange = (event) => {
    const {value} = event.target;

    if(!value){
      this.setState({
        books: [],
        value: ''
      })
      return
    }
    
    this.setState({
      value: value
    })

    BooksAPI.search(value)
      .then((books) => {

        if(books.error){
          this.setState({
            books: []
          })
          return
        }

        this.setState({
          books: books
        })
        
      })
  }

  getShelf(book){
    let category = NONE;

    const userBook = this.props.books.filter(currentBook => book.id === currentBook.id)
    if (userBook.length) category = userBook[0].shelf;

    return category

  }


  render() {
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <form />
                  <input type="text" name="search" onChange={this.handleChange} placeholder="Search by title or author" value={this.state.value} />
                  
                <form />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

                {this.state.books.map( book => {
                  let shelf = this.getShelf(book)
                  return <Book book={book} key={book.id} updateShelf={this.props.updateShelf} shelf={shelf}/>
                  })}
              </ol>
            </div>
          </div>
    )
  }
}
