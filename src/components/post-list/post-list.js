import React from 'react';
import PostListItem from '../post-list-item'
import {ListGroup, ListGroupItem} from 'reactstrap';

import './post-list.css';

const PostList = ({posts, deletePost, toggleImportant, toggleLike})=>{

  const elements = posts.map((post) => {
    const {id, ...postProps} = post;

    function onDelete() {
      deletePost(id);
    };

    function onToggleImportant() {
      toggleImportant(id);
    }

    function onToggleLike() {
      toggleLike(id);
    }

    return (
      <ListGroupItem key={id}>
        <PostListItem 
          {...postProps} 
          onDelete={onDelete} 
          onToggleImportant={onToggleImportant}
          onToggleLike={onToggleLike}/>
      </ListGroupItem>
    )
  })

  return (
    <ListGroup className='app-list'>
      {elements}
    </ListGroup>
  )
}

export default PostList;