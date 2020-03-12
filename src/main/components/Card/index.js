import React from 'react'
import { Card as ReactCard, Icon } from 'semantic-ui-react'
import ImageCard from '../../images/les.jpg'
import './index.css'

function Card() {
  return (
    <div className='card-root'>
      <div className='card-top'>
        <img src={ImageCard} width='100%' height='100%' />
      </div>
      <div className='card-buttom'>
        <p>lesik</p>
         <Icon name='book' />
      </div>
    </div>
  )
}

export default Card