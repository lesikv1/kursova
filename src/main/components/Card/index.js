import React from 'react'
import { Card as ReactCard, Icon } from 'semantic-ui-react'
import ImageCard from '../../images/les.jpg'
import './index.css'

function Card({item}) {
  const {
    title,
    startDate,
    endDate,
    sity
  } = item

  return (
    <div className='c-card-root'>
      <div className='c-card-top'>
        <img className='c-image' src={ImageCard} />
      </div>
      <div className='c-card-buttom'>
        <p className='c-card-title'>{title}</p>
        <div className='c-card-dates'>
          <div className='c-card-date-start'>
            <Icon name='calendar alternate outline' />
            <p className='c-start-data'>Тэзы до {startDate}</p>
          </div>
          <div className='c-card-date-end'>
            <Icon name='calendar alternate outline' />
            <p className='c-end-data'>Начало {endDate}</p>
          </div>
        </div>
        <div className='c-card-sity'>
          <Icon name='map marker alternate' />
          <p>{sity}</p>
        </div>
      </div>
    </div>
  )
}

export default Card