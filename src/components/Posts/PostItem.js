import React from 'react'

import './PostItem.css'
import Card from '../UI/Card'

function PostItem(props) {
  const deleteHandler = () => {
    props.onPostDelete(props.id);
  };
  return (
    <li>
      <div className='post-item'>
        <div>
          <p className='post-item__timestamp'>{props.timestamp}</p>
          <p className='post-item__text'>{props.text}</p>
        </div>
        <button onClick={deleteHandler}> Delete </button>
      </div>
    </li>
  )
}

export default PostItem