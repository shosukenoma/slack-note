import React from 'react';
import PostForm from './PostForm';

import './NewPost.css';

function NewPost(props) {
  return (
    <div className='new-post'>
      <PostForm onSendPost={props.onAddPost}/>
    </div>
  )
}

export default NewPost