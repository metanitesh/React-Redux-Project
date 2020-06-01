import React from 'react'
import PropTypes from 'prop-types'

export default function Author(props) {
  const {authors} = props;

  return (
    <div>
      { 
        authors && 
        authors.length &&
        authors.map(author => <div key={author}>{author}</div>)
      }
    </div>
  );
}

Author.propTypes = {
  authors: PropTypes.array
}
