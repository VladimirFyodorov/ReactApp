import React from 'react';

import './search-panel.css';


const SearchPanel = ({changeSearchedText})=>{
  const onChange = (event) => {
    changeSearchedText(event.target.value);
  }

  return (
    <input
      onChange={onChange}
      className='form-control search-input'
      type='text'
      placeholder='Поиск по записям'
      />
  )
}

export default SearchPanel;