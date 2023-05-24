import React, { useState } from 'react'

import './PostForm.css'

function PostForm(props) {

  const [inputText, setInputText] = useState('');

  const inputTextChangeHandler = (event) => {
    setInputText(event.target.value);
  }

  const sendPostHandler = (event) => {
    event.preventDefault();
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