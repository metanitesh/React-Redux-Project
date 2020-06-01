import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CURRENTLY_READING, WANT_TO_READ, READ, NONE } from './../Constant'

export default class ChangeSegment extends Component {
  static propTypes = {
    updateCategory: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  }

  state = {
    value:"None"
  }


  componentDidMount(){
    this.setState({
      value: this.props.category
    })
  }

  handleChange = (event) =>{
    const {category, book, updateCategory} = this.props;
    const {value} = event.target;
    
    this.setState({
      value
    })

    updateCategory(category, value, book)
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
