import React, { useState } from 'react'

import './PostForm.css'

function PostForm(props) {

  const [inputText, setInputText] = useState('');

  const inputTextChangeHandler = (event) => {
    setInputText(event.target.value);
  }

  const sendPostHandler = (event) => {
    event.preventDefault();
    const postData={
      id: Math.random().toString(),
      timestamp: 'Wednesday, May 24th 8:20 PM',
      text: inputText,
    };
    props.onSendPost(postData);
    setInputText('');
  }

  return (
    <div>
      <form onSubmit={sendPostHandler}>
        <input type='text' value={inputText} onChange={inputTextChangeHandler} />
        <button className='post-form__button' type='submit'> Send </button>
      </form>
    </div>
  )
}

export default PostForm