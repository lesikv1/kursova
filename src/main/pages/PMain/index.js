import React, { useState } from 'react'
import { Card, InputSearch } from '../../components'

import './index.css'

const data = [
  {
    title: 'title',
    dateStart: 'dateStart',
    dateEnd: 'dateEnd',
    location: 'location',
    category: 'mathematic',
    id: '123sdasd'
  },
  {
    title: 'title',
    dateStart: 'dateStart',
    dateEnd: 'dateEnd',
    location: 'location',
    category: 'mathematic',
    id: '123sda2d'
  },
  {
    title: 'title',
    dateStart: 'dateStart',
    dateEnd: 'dateEnd',
    location: 'location',
    category: 'mathematic',
    id: '123sda7d'
  }
]

export default function PMain() {
  const [category, setCategory] = useState('')

  const onBlur = () => {
    console.log(false)
  }

  const onFocus = () => {
    console.log(true)
  }

  return (
    <div className='p-main'>
      <div className='p-sort-data'>
        <InputSearch
          value={category}
          onChange={setCategory}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>
      <div className='p-main-content'>
        {
          data.map((item) => <Card item={item} key={item.id} />)
        }
      </div>
    </div>
  );
}
