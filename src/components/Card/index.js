import React from 'react';
import { Card as ReactCard, Icon } from 'semantic-ui-react'
import './index.css'

function Card() {

  const extra = (
    <a href='https://psoriatic-arthritis.com/wp-content/uploads/2018/01/8653.jpg'>
      <Icon name='book' />
      Read
    </a>
  )
  return (
    <ReactCard
      className='card'
      image='https://psoriatic-arthritis.com/wp-content/uploads/2018/01/8653.jpg'
      header='Elliot Baker'
      meta='Friend'
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      extra={extra}
    />
  )
}

export default Card