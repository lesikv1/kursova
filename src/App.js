import React from 'react'
import {
  BrowserRouter,
} from 'react-router-dom';
import Layout from './main/layout'

import 'semantic-ui-css/semantic.min.css'

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}