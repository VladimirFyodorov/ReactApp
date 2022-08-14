import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;

  // color: ${props => (props.colored)? 'red': 'green'};
  // :hover {color: blue;}
`

// makeing chiled
// const NewBlock = styled(AppBlock)`background-color: green`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {label:'Going to learn React', important: true, like: false, id:1},
        {label:'This is good', important: false, like: false, id:2},
        {label:'I need a break', important: false, like: false, id:3}
      ],
      searchedText: '',
      filter: 'all'
    };
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.toggleImportant = this.toggleImportant.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.changeSearchedText = this.changeSearchedText.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  deletePost(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id),
        newData = [...data.slice(0, index), ...data.slice(index + 1)];

      return ({data: newData});
    })
  }

  createPost(label) {
    this.setState(({data}) => {
      const id = data[data.length - 1].id + 1,
        newData = [...data, {label, important: false, like: false, id}];

      return ({data: newData});
    })
  }

  toggleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id),
        important = !data[index].important,
        newData = [...data.slice(0, index), {...data[index], important}, ...data.slice(index + 1)];

      return ({data: newData});
    })
  }

  toggleLike(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id),
        like = !data[index].like,
        newData = [...data.slice(0, index), {...data[index], like}, ...data.slice(index + 1)];

      return ({data: newData});
    })
  }

  changeSearchedText(searchedText) {
    this.setState({searchedText});
  }

  searchPost(posts, searchedText) {
    if (searchedText.length > 0) {
      return posts.filter(post => post.label.toLowerCase().includes(searchedText.toLowerCase()))
    } else {
      return posts
    }
  }

  changeFilter(filter) {
    this.setState({filter});
  }

  filterPosts(posts, filter) {
    if (filter === 'like') {
      return posts.filter(post => post.like);
    } else {
      return posts;
    }
  }

  render() {
    const {data, searchedText, filter} = this.state,
      likedPostsNum = data.filter(post => post.like).length,
      allPostsNum = data.length,
      visiablePosts = this.filterPosts(this.searchPost(data, searchedText), filter);
  
    return ( 
      <AppBlock>
        <AppHeader 
          likedPostsNum={likedPostsNum}
          allPostsNum={allPostsNum}/>
        <div className = 'search-pannel d-flex' >
          <SearchPanel changeSearchedText={this.changeSearchedText}/>
          <PostStatusFilter filter={filter} changeFilter={this.changeFilter}/>
        </div>
        <PostList 
          posts={visiablePosts}
          deletePost={this.deletePost}
          toggleImportant={this.toggleImportant}
          toggleLike={this.toggleLike}/>
        <PostAddForm createPost={this.createPost}/>
      </AppBlock>
    )
  }
}