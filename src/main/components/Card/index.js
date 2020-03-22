import React from 'react'
import { Card as ReactCard, Icon } from 'semantic-ui-react'
import ImageCard from '../../images/les.jpg'
import './index.css'

function Card({item}) {
  const {title, dateStart, dateEnd, location, category} = item

  return (
    <div className='c-card-root'>
      <div className='c-card-top'>
        <img src={ImageCard} width='100%' height='100%' />
      </div>
      <div className='c-card-buttom'>
        <p className='c-card-title'>{title}</p>
        <div className='c-card-dates'>
          <div className='c-card-date-start'>
            <Icon name='calendar alternate outline' />
            <p>{dateStart}</p>
          </div>
          <div className='c-card-date-end'>
            <Icon name='calendar alternate outline' />
            <p>{dateEnd}</p>
          </div>
        </div>
        <div className='c-card-location'>
          <Icon name='map marker alternate' />
          <p>{location}</p>
        </div>
      </div>
    </div>
  )
}

export default Card