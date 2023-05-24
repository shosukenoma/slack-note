import React from 'react'

import './PostItem.css'
import Card from '../UI/Card'

function PostItem(props) {
  return (
    <Card className='post-item'>
      <div>
        <p className='post-item__timestamp'>{props.timestamp}</p>
        <p className='post-item__text'>{props.text}</p>
      </div>
      <button> Delete </button>
    </Card>
  )
}

export default PostItem