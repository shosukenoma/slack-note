import React from 'react'
import PostItem from './PostItem'

import './PostsList.css'

function PostsList(props) {
  return (
    <ul className='posts-list'>
      {props.postData.map((post) => (
        <PostItem 
          key={post.id}
          timestamp={post.timestamp}
          text={post.text}
        />
      ))}
    </ul>
  )
}

export default PostsList