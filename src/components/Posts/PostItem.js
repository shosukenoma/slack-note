import React from 'react'

import './PostItem.css'

function PostItem(props) {
  return (
    <div>
      <p>{props.timestamp}</p>
      <h3>{props.text}</h3>
    </div>
  )
}

export default PostItem