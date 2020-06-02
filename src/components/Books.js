import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


export default class Books extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const {books, updateShelf, shelf} = this.props

    return (
      <>
      {books.map( book => {
        return (
          <Book book={book} key={book.id} updateShelf={updateShelf} shelf={shelf}/>
        )
      })}
      </>
        
    )
  }
}
