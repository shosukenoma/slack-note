import React, { useState } from 'react';

import Posts from './components/Posts/Posts';
import NewPost from './components/NewPost/NewPost';

import './App.css';

function App() {

  const [postData, setPostData] = useState([]);
  // Start out with empty list.
  const addPostHandler = (postData) => {
    setPostData((prevData) => {
      return [...prevData, postData]
    })
  }
  const postDeleteHandler = (postID) => {
    setPostData((prevData) => {
      const updatedData = prevData.filter(post => post.id !== postID);
      return updatedData;
    })
  }

  return (
    <div className="App">
      <Posts postData={postData} onPostDelete={postDeleteHandler}></Posts>
      <NewPost onAddPost={addPostHandler}></NewPost>
    </div>
  );
}

export default App;
