import React, { useState } from 'react';
import '../components/App.css';
import ProductList from '../components/ProductList';

function App() {
 
  return (
    <div className="App">
      <h1>Fake Shop</h1>
      <ProductList />
    </div>
  );
}

export default App;
