import React from 'react'
import {
  BrowserRouter,
} from 'react-router-dom';
import Layout from './main/layout'

import 'semantic-ui-css/semantic.min.css'

import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}