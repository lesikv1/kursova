import React from "react"
import {
  Link,
  useLocation
} from "react-router-dom"
import Content from '../routers'
import {Header, Footer} from '../components'

import './index.css'

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <div className='layout'>      
      {/* <Header /> */}
      <div className='content'>
        <Content />
      </div>
      {(pathname !== '/login') && (<Footer />)}
    </div>
  );
}
