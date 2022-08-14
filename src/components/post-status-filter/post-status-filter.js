import React, {Component} from 'react';
// import {Button} from 'reactstrap';
import './post-status-filter.css';


export default class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {label:'Все', filter: 'all'},
      {label:'Понравилось', filter: 'like'}
    ];
  }

  render() {
    const buttons = this.buttons.map(({label, filter}) => {
        const active = this.props.filter === filter;

        return (<button
            key={label}
            type='button' 
            className = {(active)? 'btn btn-info': 'btn btn-outline-secondary'}
            onClick={() => {this.props.changeFilter(filter)}}
            >
              {label}
            </button>)
        });
      
    return (
      <div className='btn-group'>
        {buttons}
      </div>
    )
  }
}