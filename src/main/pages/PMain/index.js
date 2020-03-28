import React, { useState } from 'react'
import { Card, InputSearch } from '../../components'
import {AutoComplete} from 'primereact/autocomplete'

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
  const [brandSuggestions, setBrandSuggestions] = useState(null)
  const [brands, setBrands] = useState( ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'])
  const [lesik, setLesik] = useState('')

  const suggestBrands = (event) => {
    let results = brands.filter((brand) => {
      return brand.toLowerCase().startsWith(event.query.toLowerCase());
    });
    setBrandSuggestions(results)
}

  return (
    <div className='p-main'>
      <div className='p-sort-data'>
        <AutoComplete
          className='autocomplete-input'
          value={lesik}
          onChange={(e) => setLesik(e.value)}
          suggestions={brandSuggestions}
          completeMethod={suggestBrands} 
          dropdown={true} 
        />
        <AutoComplete
          className='autocomplete-input'
          value={lesik}
          onChange={(e) => setLesik(e.value)}
          suggestions={brandSuggestions}
          completeMethod={suggestBrands} 
          dropdown={true} 
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
