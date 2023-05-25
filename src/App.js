import React, { useState } from 'react';

import Posts from './components/Posts/Posts';
import NewPost from './components/NewPost/NewPost';

import './App.css';

function App() {

  const [postData, setPostData] = useState([
    {
      id: Math.random().toString(),
      timestamp: 'Wednesday, May 24th 10:54 AM',
      text: 'Eat Peach!',
    },
    {
      id: Math.random().toString(),
      timestamp: 'Wednesday, May 25th 8:23 PM',
      text: 'Make your bed every morning.',
    }
  ]);

  const addPostHandler = (postData) => {
    setPostData((prevData) => {
      return [...prevData, postData]
    })
  }

  return (
    <div className="App">
      <Posts postData={postData}></Posts>
      <NewPost onAddPost={addPostHandler}></NewPost>
    </div>
  );
}

export default App;
