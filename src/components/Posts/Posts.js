import React from 'react'
import Card from '../UI/Card'
import PostsList from './PostsList'

import './Posts.css'

function Posts(props) {
  return (
    <div className='posts'>
      <PostsList postData={props.postData} onPostDelete={props.onPostDelete}/>
    </div>
  )
}

export default Posts