import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Author from './Authors'
import ChangeSegment from './ChangeSegment'


export default class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateCategory: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
  }

  render() {
    const {updateCategory, category, book} = this.props
    const {title, authors, imageLinks, } = book

    return (
      <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks && imageLinks.smallThumbnail})` }}></div>
              <div className="book-shelf-changer">
                <ChangeSegment updateCategory={updateCategory} category={category} book={book}/>
              </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
              <Author authors={authors}/></div>
          </div>
      </li>
    )
  }
}
