import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'


export default class Books extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    return (
      <>
      {this.props.books.map( book => {
        return (
          <Book book={book} key={book.id}/>
        )
      })}
      </>
        
    )
  }
}
