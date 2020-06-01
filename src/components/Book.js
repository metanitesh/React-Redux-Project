import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Author from './Authors'

export default class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {

    const {title, authors, imageLinks} = this.props.book

    return (
      <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
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
