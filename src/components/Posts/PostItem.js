import React, {useState} from 'react'

import './PostItem.css'

function PostItem(props) {
  const deleteHandler = () => {
    props.onPostDelete(props.id);
  };

  const [isPinned, setIsPinned] = useState(false);

  const pinHandler = () => {
    isPinned ? setIsPinned(false) : setIsPinned(true);
  }

  return (
    <li>
      <div className={`post-item ${isPinned ? 'pinned' : ''}`}>
        <div>
          <p className='post-item__timestamp'>{props.timestamp}</p>
          <p className='post-item__text'>{props.text}</p>
        </div>
        <button onClick={deleteHandler}> Delete </button>
        <button onClick={pinHandler}> {`${isPinned ? 'Unpin Item' : 'Pin Item'}`} </button>
      </div>
    </li>
  )
}

export default PostItem