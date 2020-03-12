import React from "react"
import {
  useLocation
} from "react-router-dom"
import './index.css'

export default function Header() {
  const { pathname } = useLocation()
  return (
    <div className='header'>
      {(pathname !== '/login' && pathname !== '/registration') && (
        <div className='buttons'>
          <button class="medium ui button">FAQ</button>
          <button class="medium ui button">МОЖЛИВОСTI</button>
          <button class="medium ui button">КОНТАКТИ</button>
          <button class="massive ui button">ПРОФIЛЬ</button>
        </div>
      )}
    </div>
  );
}
