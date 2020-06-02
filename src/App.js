import React from 'react'

import './App.css'
import { CURRENTLY_READING, WANT_TO_READ, READ, NONE } from './Constant'
import {Route} from 'react-router-dom'
import DashBoard from './Dashboard'
import SearchPage from './Searchpage'

class BooksApp extends React.Component {
  state = {
    "categories":[ CURRENTLY_READING, WANT_TO_READ, READ ],
    [CURRENTLY_READING]:[{
      "title": "Travels",
      "authors": [
          "Michael Crichton"
      ],
      "publisher": "Vintage",
      "publishedDate": "2012-05-14",
      "description": "From the bestselling author of Jurassic Park, Timeline, and Sphere comes a deeply personal memoir full of fascinating adventures as he travels everywhere from the Mayan pyramids to Kilimanjaro. Fueled by a powerful curiosity—and by a need to see, feel, and hear, firsthand and close-up—Michael Crichton's journeys have carried him into worlds diverse and compelling—swimming with mud sharks in Tahiti, tracking wild animals through the jungle of Rwanda. This is a record of those travels—an exhilarating quest across the familiar and exotic frontiers of the outer world, a determined odyssey into the unfathomable, spiritual depths of the inner world. It is an adventure of risk and rejuvenation, terror and wonder, as exciting as Michael Crichton's many masterful and widely heralded works of fiction.",
      "industryIdentifiers": [
          {
              "type": "ISBN_13",
              "identifier": "9780307816498"
          },
          {
              "type": "ISBN_10",
              "identifier": "0307816494"
          }
      ],
      "readingModes": {
          "text": true,
          "image": false
      },
      "pageCount": 400,
      "printType": "BOOK",
      "categories": [
          "Biography & Autobiography"
      ],
      "averageRating": 3.5,
      "ratingsCount": 12,
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": true,
      "contentVersion": "1.3.3.0.preview.2",
      "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
      },
      "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=Gv7oh_ukn3QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=Gv7oh_ukn3QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=Gv7oh_ukn3QC&printsec=frontcover&dq=travel&hl=&cd=1&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=Gv7oh_ukn3QC&source=gbs_api",
      "canonicalVolumeLink": "https://market.android.com/details?id=book-Gv7oh_ukn3QC",
      "id": "Gv7oh_ukn3QC"
    }],
    [WANT_TO_READ]:[{
      "title": "Travel",
      "publishedDate": "1914",
      "industryIdentifiers": [
          {
              "type": "OTHER",
              "identifier": "STANFORD:36105117062443"
          }
      ],
      "readingModes": {
          "text": false,
          "image": true
      },
      "printType": "BOOK",
      "categories": [
          "Travel"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "0.1.0.0.full.1",
      "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
      },
      "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nzJQAQAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nzJQAQAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "en",
      "previewLink": "http://books.google.com/books?id=nzJQAQAAIAAJ&printsec=frontcover&dq=travel&hl=&cd=3&source=gbs_api",
      "infoLink": "https://play.google.com/store/books/details?id=nzJQAQAAIAAJ&source=gbs_api",
      "canonicalVolumeLink": "https://market.android.com/details?id=book-nzJQAQAAIAAJ",
      "id": "nzJQAQAAIAAJ"
    }],
    [READ]:[{
    "title": "The Travel Book",
    "subtitle": "A Journey Through Every Country in the World",
    "authors": [
        "Lonely Planet Publications (Firm)"
    ],
    "publishedDate": "2011",
    "description": "TRAVEL & HOLIDAY GUIDES. Completely updated with 850 stunning new images; A -to-Z coverage of every country; Sumptuous double-page spreads with vivid photography and evocative text, Now in paperback format.",
    "industryIdentifiers": [
        {
            "type": "ISBN_10",
            "identifier": "1742200796"
        },
        {
            "type": "ISBN_13",
            "identifier": "9781742200798"
        }
    ],
    "readingModes": {
        "text": false,
        "image": false
    },
    "pageCount": 447,
    "printType": "BOOK",
    "categories": [
        "Travel"
    ],
    "averageRating": 4.5,
    "ratingsCount": 3,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "preview-1.0.0",
    "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=QfdOYgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=QfdOYgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=QfdOYgEACAAJ&dq=travel&hl=&cd=2&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=QfdOYgEACAAJ&dq=travel&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/The_Travel_Book.html?hl=&id=QfdOYgEACAAJ",
    "id": "QfdOYgEACAAJ"
    }]
  
  
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
  }

  updateCategory = (from, to, book) => {

    if(from === to){
      return 
    }

    this.setState( prev => {
  
      
      let addTo = prev[to];
      let removeFrom = prev[from];

      if(to !== NONE){
        addTo = prev[to].concat(book);
      }

      if(from !== NONE){
        removeFrom = prev[from].filter( currentBook => currentBook.id !== book.id);
      }

      return {
        [from]: removeFrom,
        [to]: addTo
      }
    })
  
  }


  render() {

    // const {data} = this.state;

    return (
      <div className="app">
      <Route exact path="/" render={()=> (
        <DashBoard data={this.state} updateCategory={this.updateCategory} />
      )} />

      <Route exact path="/search" render={()=> (
        <SearchPage updateCategory={this.updateCategory} books={this.state.books}/>
      )} />
      
      </div>
    )
  }
}

export default BooksApp
