import React from 'react'

import './App.css'
import { CURRENTLY_READING, WANT_TO_READ, READ } from './Constant'
import {Route} from 'react-router-dom'
import DashBoard from './Dashboard'
import SearchPage from './Searchpage'

class BooksApp extends React.Component {
  state = {
    "shelves":[ CURRENTLY_READING, WANT_TO_READ, READ ],
    books:[{}]
    
  }

  componentDidMount(){
    if(localStorage.getItem('bookApp')){
      this.setState({
        books: JSON.parse(localStorage.getItem('bookApp'))
      })
    }
    

  }

  updateShelf = (book) => {
    
    this.setState( prev => {
      const filteredBook = prev.books.filter( currentBook => currentBook.id !== book.id)
      return {
        books: [ ...filteredBook, book]
      }

    }, () => {
      localStorage.setItem('bookApp', JSON.stringify(this.state.books))
    })
  }


  render() {

    // const {data} = this.state;

    return (
      <div className="app">
      <Route exact path="/" render={()=> (
        <DashBoard books={this.state.books} shelves={this.state.shelves} updateShelf={this.updateShelf} />
      )} />

      <Route exact path="/search" render={()=> (
        <SearchPage updateShelf={this.updateShelf} books={this.state.books}/>
      )} />
      
      </div>
    )
  }
}

export default BooksApp
