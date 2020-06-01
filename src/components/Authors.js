import React from 'react'
import PropTypes from 'prop-types'

export default function Author(props) {
  return (
    <div>
      { 
        props.authors && 
        props.authors.length &&
        props.authors.map(author => <div key={author}>{author}</div>)
      }
    </div>
  );
}

Author.propTypes = {
  authors: PropTypes.array
}
