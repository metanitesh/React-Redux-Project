import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookSegment from './components/BookSegment'
import {Link} from 'react-router-dom'

export default class DashBoard extends Component {
  static propTypes = {
    data : PropTypes.object.isRequired,
    updateCategory: PropTypes.func.isRequired
  }

  render() {

    const {data, updateCategory} = this.props

    return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {data.categories.map( name => (
                <BookSegment key={name} books={data[name]} name={name} updateCategory={updateCategory}/>
              ))}
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
      </div>
        
    )
  }
}
