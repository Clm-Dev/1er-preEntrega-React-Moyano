import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './views/MainLayout';
import ProductCatalog from './views/ProductCatalog';
import ProductDetail from './views/ProductDetail';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<h1 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Inicio - Mundo Gamer</h1>} />
        <Route path="/carrito" element={<h1 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Tu Carrito de Compras</h1>} />
        <Route path="/productos" element={<ProductCatalog />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
