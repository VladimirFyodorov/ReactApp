import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let itemClassNames = 'app-list-item d-flex justify-content-between',
        {label, important, like, onDelete, onToggleImportant, onToggleLike} = this.props;

    itemClassNames += (important)? ' important': '';
    itemClassNames += (like)? ' like': '';

    return (
      <div className={itemClassNames}>
        <span onClick={onToggleLike} className='app-list-item-label'>
          {label}
        </span>
        <div className='d-flex justify-content-center align-items-center'>
          <button onClick={onToggleImportant} type='button' className='btn-star btn-sm'>
            <i className='fa fa-star'></i>
          </button>
          <button onClick={onDelete} type='button' className='btn-trash btn-sm'>
            <i className='fa fa-trash'></i>
          </button>
          <i className='fa fa-heart'></i>
        </div>
      </div>
    )
  }
}