import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books'


export default class BookSegment extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Books books={this.props.books}/>
    
          </ol>
        </div>
      </div>
    )
  }
}
