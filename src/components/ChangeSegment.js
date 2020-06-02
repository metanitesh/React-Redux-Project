import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CURRENTLY_READING, WANT_TO_READ, READ, NONE } from './../Constant'

export default class ChangeSegment extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  state = {
    value:"None"
  }


  componentDidMount(){
    this.setState({
      value: this.props.shelf
    })
  }

  handleChange = (event) =>{
    const {book, updateShelf} = this.props;
    const {value} = event.target;
    
    this.setState({
      value
    })
    
    book.shelf = value

    updateShelf(book)
  }


  render() {
    

    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="move" disabled>Move to...</option>
        <option value= {CURRENTLY_READING}>Currently Reading</option>
        <option value={WANT_TO_READ}>Want to Read</option>
        <option value={READ}>Read</option>
        <option value={NONE}>None</option>
      </select>
    )
  }
}
