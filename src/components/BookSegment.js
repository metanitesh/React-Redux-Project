import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books'


export default class BookSegment extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const {books, shelf, updateShelf} = this.props
    return (
      <>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                
                books.length
                ? <Books books={books} updateShelf={updateShelf} shelf={shelf}/>
                : <h3> No book added yet. </h3>
              }
             
            </ol>
          </div>
        </div>
      </>
    )
  }
}
