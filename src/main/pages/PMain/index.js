import React from 'react'
import { Card, InputSearch } from '../../components'

import './index.css'

export default function PMain() {
  return (
    <div className='p-main'>
      <div className='p-sort row'>
        <InputSearch />
        <InputSearch />
        <InputSearch />
      </div>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}
