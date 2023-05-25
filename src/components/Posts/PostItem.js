import React from 'react'

import './PostItem.css'
import Card from '../UI/Card'

function PostItem(props) {
  return (
    <li>
      <Card className='post-item'>
        <div>
          <p className='post-item__timestamp'>{props.timestamp}</p>
          <p className='post-item__text'>{props.text}</p>
          <p className='post-item__id'>{props.id}</p>
        </div>
        <button> Delete </button>
      </Card>
    </li>
  )
}

export default PostItem