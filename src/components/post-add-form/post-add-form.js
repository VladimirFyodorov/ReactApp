import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {label: ''};
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({label: event.target.value})
  }

  onSubmit(event) {
    this.props.createPost(this.state.label);
    this.setState(({label})=>{
      return ({label: ''})
    })

    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='bottom-panel d-flex'>
        <input 
          onChange={this.onValueChange}
          className='form-control new-post-label'
          type="text"
          placeholder='О чём вы сейчас думаете?'
          value={this.state.label}
          />
        <button
          type="submit"
          className='btn btn-outline-secondary'>
            Добавить
          </button>
      </form>
    )
  }
}