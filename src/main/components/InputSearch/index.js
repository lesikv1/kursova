import React from 'react'
import './index.css'

function InputSearch ({value, onChange, onBlur, onFocus}) {
  console.log(value)
  return (
    <div className='c-input-search-root'>
      <div className='search-input-root'>
        <div className="ui big icon input">
          <input
            type="text"
            placeholder="Search big..."
            value={value}
            onChange={e => onChange(e.target.value)}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          <i className="search icon"></i>
        </div>
      </div>
    </div>
  )
}

export default InputSearch