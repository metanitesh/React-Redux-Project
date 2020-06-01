import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSegment from './components/BookSegment'


class BooksApp extends React.Component {
  state = {
    "categories":["Currently Reading"],
    "Currently Reading":[{
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
  },
  {
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
  },
  {
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
  }]
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookSegment books={this.state["Currently Reading"]} name="Currently Reading"/>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }}></div>
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
                          <div className="book-title">1776</div>
                          <div className="book-authors">David McCullough</div>
                        </div>
                      </li>
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")' }}></div>
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
                          <div className="book-title">Harry Potter and the Sorcerer's Stone</div>
                          <div className="book-authors">J.K. Rowling</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")' }}></div>
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
                          <div className="book-title">The Hobbit</div>
                          <div className="book-authors">J.R.R. Tolkien</div>
                        </div>
                      </li>
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")' }}></div>
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
                          <div className="book-title">Oh, the Places You'll Go!</div>
                          <div className="book-authors">Seuss</div>
                        </div>
                      </li>
                      <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
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
                          <div className="book-title">The Adventures of Tom Sawyer</div>
                          <div className="book-authors">Mark Twain</div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
