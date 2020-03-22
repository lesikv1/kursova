import React, {useState, useRef} from 'react'
import './index.css'

function InputSearch ({value, onChange, listData}) {
  const [visibleList, setVisibleList] = useState(false)
  let refDiv = useRef(null)

  return (
    <div
      className='c-input-search-root'
      onFocus={() => setVisibleList(true)}
      onBlur={() => setVisibleList(false)}
      tabIndex={0}
      ref={refDiv}
    >
      <div className='search-input-root'>
        <div className="ui big icon input">
          <input
            type="text"
            placeholder="Search big..."
            value={value}
            onChange={e => onChange(e.target.value)}
            onClick={() => refDiv.current.focus()}
          />
          <i className="search icon"></i>
        </div>
      </div>
      {visibleList && listData.length > 0 && (
        <div className='c-list-items'>
          {listData.map((item, index) => (
            <div className='c-item-sub-input'
            onClick={() => {
              onChange(item)
              setVisibleList(false)
            }}
            key={index}
            >
              <p>{item}</p>
            </div>
        ))}
        </div>
      )}
    </div>
  )
}

export default InputSearch