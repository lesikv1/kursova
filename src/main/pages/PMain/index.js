import React, { useState, useEffect } from 'react'
import { Card, InputSearch } from '../../components'
import {AutoComplete} from 'primereact/autocomplete'
import Loader from 'react-loader-spinner'
import axios from 'axios'

import './index.css'

export default function PMain() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
 
  const [suggestionDirections, setSuggestionDirections] = useState(null)
  const [directions, setDirections] = useState([
    'Экономические',
    'Технические',
    'Медицинские',
    'Социологические',
    'Педагогические',
    'Филологические',
    'Биологические',
    'Культурология',
    'Физико-математические',
    'Исторические-и-археология',
    'Юридические',
    'Психологические',
    'Философские',
    'Химические',
    'Политология',
    'Компьютерные',
    'Искусствоведение',
    'Экология',
    'Географические',
    'Геолого-минералогические',
    'Сельскохозяйственные',
    'Науки-о-Земле',
    'Нанотехнологии',
    'Фармацевтические',
    'Архитектура',
    'Ветеринарные',
    'Междисциплинарные'
  ])
  const [valueDirection, setValueDirection] = useState('')
  const filterDirections = (event) => {
    let results = directions.filter((direction) => {
      return direction.toLowerCase().startsWith(event.query.toLowerCase());
    });
    setSuggestionDirections(results)
  }

  // COUNTRIES
  const [suggestionCountries, setSuggestionCountries] = useState(null)
  const [countries, setCountries] = useState([
    'Russian-Federation',
    'Ukraine',
    'USA',
    'United-Kingdom',
    'China',
    'Germany',
    'Italy',
    'Spain',
    'France',
    'Japan',
    'Canada',
    'Malaysia',
    'India',
    'Turkey',
    'Greece',
    'Belarus',
    'Poland',
    'Czech-Republic',
    'Australia',
    'Thailand',
    'Un.-Arab-Emir.',
    'Austria',
    'Netherlands',
    'Singapore',
    'Portugal',
    'Indonesia',
    'Switzerland',
    'Ireland',
  ])
  const [valueCountries, setValueCountries] = useState('')
  const filterCountries = (event) => {
    let results = countries.filter((country) => {
      return country.toLowerCase().startsWith(event.query.toLowerCase());
    });
    setSuggestionCountries(results)
  }


  useEffect(() => {
    renderCards('')
  }, [])

  useEffect(() => {
    if (!!valueDirection && !valueCountries) {
      renderCards('/0/0/' + valueDirection)
    }
    if(!valueDirection && !!valueCountries) {
      renderCards('/' + valueCountries)
    }
    if(!!valueDirection && !!valueCountries) {
      renderCards('/' + valueCountries + '/0/' + valueDirection)
    }
  }, [valueDirection, valueCountries])


  const renderCards = async (link) => {
    setLoading(true)
    let {data = {cards: []}} = await axios.post('/api/get-cards', {data: {link}})

    setTimeout(() => {
      setCards(data.cards.map((item, index) => {
        return (<Card item={item} key={index} />)
        })
      )
      setLoading(false)
    }, 1000)
  }


  return (
    <div className='p-main'>
      <div className='p-sort-data'>
        <div className='p-c-autocomplete'>
          <h3>Отрасль</h3>
          <AutoComplete
            className='c-input-autocomplete'
            value={valueDirection}
            onChange={(e) => setValueDirection(e.value)}
            suggestions={suggestionDirections}
            completeMethod={filterDirections} 
            dropdown={true} 
          />
        </div>
        <div className='p-c-autocomplete'>
          <h3>Страна</h3>
          <AutoComplete
            className='c-input-autocomplete'
            value={valueCountries}
            onChange={(e) => setValueCountries(e.value)}
            suggestions={suggestionCountries}
            completeMethod={filterCountries} 
            dropdown={true} 
          />
        </div>
      </div>
      <div className='p-main-content'>
        {loading ? (
          <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
        ) : cards}
      </div>
    </div>
  );
}
