import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books'


export default class BookSegment extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    updateCategory: PropTypes.func.isRequired
  }

  render() {
    const {books, name, updateCategory} = this.props
    
    return (
      <>
      {
        books.length ? 
        <div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Books books={books} updateCategory={updateCategory} category={name}/>
            </ol>
          </div>
        </div>
        : <></>
      }
      
      </>
    )
  }
}
