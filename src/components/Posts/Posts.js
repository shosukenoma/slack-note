import React from 'react'
import Card from '../UI/Card'
import PostItem from './PostItem'

import './Posts.css'

function Posts() {
  return (
    <Card className='posts'>
      <PostItem 
        timestamp = 'Wednesday, May 24th 10:54 AM'
        text = 'React is easier to work with. Angular has a wider variety of features but has a steeper learning curve.'
      />
      <PostItem 
        timestamp = 'Wednesday, May 25th 8:23 PM'
        text = "Don't choose the language first. Choose the tools that best suit your goals."
      />
      <PostItem 
        timestamp = 'Wednesday, May 26th 7:14 AM'
        text = 'Make your bed every morning.'
      />
    </Card>
  )
}

export default Posts