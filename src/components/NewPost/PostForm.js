import React, { useState } from 'react'

import './PostForm.css'

function PostForm(props) {

  const [inputText, setInputText] = useState('');

  const inputTextChangeHandler = (event) => {
    setInputText(event.target.value);
  }

  const sendPostHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      return;
    }
    const date = new Date;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    const postData={
      id: Math.random().toString(),
      timestamp: `${month} / ${day} / ${year} ${hours}:${minutes}`,
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