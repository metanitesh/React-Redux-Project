import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookSegment from './components/BookSegment'
import {Link} from 'react-router-dom'

export default class DashBoard extends Component {
  static propTypes = {
    books : PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
  }

  render() {

    const {books, shelves, updateShelf} = this.props

    return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {shelves.map( name => {
                const booksByShelf= books.filter(book => book.shelf === name)
                return <BookSegment key={name} books={booksByShelf} shelf={name} updateShelf={updateShelf}/>
              })}
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
      </div>
        
    )
  }
}
