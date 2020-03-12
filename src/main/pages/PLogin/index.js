import React, {useState} from 'react'
import axios from 'axios'

import './index.css'

export default function PLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const save = async () => {
    const data = {
      email,
      password
    }
    let res = await axios.post(`https://volonteryou-backend.herokuapp.com/login?email=${email}&password=${password}`, data)

    console.log(res)
  }
  return (
    <div className='pLogin'>
      <div className='formLogin'>
        <p className='login label white'>ВХІД</p>
        <div className='ui inverted input margin'>
          <input type='text' placeholder='Search...' value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className='ui inverted input margin'>
          <input type='text' placeholder='Search...' value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <button className='massive ui button margin'  onClick={save}>
          <p className='label black'>УВІЙТИ</p>
        </button>
        <div className='row margin'>
          <p className='text black'>ЩЕ НЕ ЗАРЕЄCТРУВАВСЯ?</p>
          <button class='medium ui button'>
            <p className='text yellow'>ЗАРЕЄСТРУВАТИСЯ</p>
          </button>
        </div>
      </div>
    </div>
  );
}
