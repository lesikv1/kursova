import React, { useState, useEffect } from 'react'
import { Card, InputSearch } from '../../components'
import {AutoComplete} from 'primereact/autocomplete'
import axios from 'axios'

import './index.css'

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

  const [cards, setCards] = useState([])

  useEffect(() => {
    renderCards()
  }, [])

  const renderCards = async () => {
    let {data = {cards: []}} = await axios.get('/api/get-cards')
    console.log(data.cards[0])

    setCards(data.cards.map((item, index) => {
      return (<Card item={item} key={index} />)
      })
    )
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
        {cards}
      </div>
    </div>
  );
}
