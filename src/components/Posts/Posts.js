import React from 'react'
import Card from '../UI/Card'
import PostsList from './PostsList'

import './Posts.css'

function Posts(props) {
  return (
    <Card className='posts'>
      <PostsList postData={props.postData}/>
    </Card>
  )
}

export default Posts