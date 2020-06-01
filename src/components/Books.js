import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


export default class Books extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateCategory: PropTypes.func.isRequired,
    category:PropTypes.string.isRequired
  }

  render() {
    const {books, updateCategory, category} = this.props

    return (
      <>
      {books.map( book => {
        return (
          <Book book={book} key={book.id} updateCategory={updateCategory} category={category}/>
        )
      })}
      </>
        
    )
  }
}
