import React from 'react';

import './app-header.css';
import styled from 'styled-components';

const AppHeaderBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-size: 26px;
    // color: ${props => (props.colored)? 'red': 'green'};
    // :hover {color: blue;}
  }

  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`
// makeing chiled
// const NewBlock = styled(AppHeaderBlock)`background-color: green`;


const AppHeader = ({likedPostsNum, allPostsNum})=>{
  return (
    <AppHeaderBlock>
      <h1>Vladimir Fyodorov</h1>
      <h2>{allPostsNum} записей, из них понравилось {likedPostsNum}</h2>
    </AppHeaderBlock>
  )
}

export default AppHeader;