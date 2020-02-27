import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import Card from './components/Card'
import { AutoComplete }  from 'primereact/autocomplete'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'

function App() {
  const [brandSuggestions, setBrandSuggestions] = useState(null)
  const [brand, setBrand] = useState('')
  const brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo']
  
  const suggestBrands = (event) => {
    const results = brands.filter((brand) => {
        return brand.toLowerCase().startsWith(event.query.toLowerCase());
    });

    setBrandSuggestions({ results });
  }

  return (
    <div className='app'>
      <div className='main-header'>
        <p>header</p>
      </div>
      <div>
        <AutoComplete
          value={brand}
          onChange={(e) => setBrand(e.value)}
          suggestions={brandSuggestions}
          completeMethod={setBrandSuggestions}
        />
      </div>
      <div className='content'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className='footer'>
        <p>footer</p>
      </div>
    </div>
  );
}

export default App;
