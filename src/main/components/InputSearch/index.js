import React from 'react'
import './index.css'

function InputSearch () {
  return (
    <div className='c-input-search-root'>
      <div className='search-input-root'>
        <div className="ui big icon input">
          <input type="text" placeholder="Search big..."/>
          <i className="search icon"></i>
        </div>
      </div>
    </div>
  )
}

export default InputSearch