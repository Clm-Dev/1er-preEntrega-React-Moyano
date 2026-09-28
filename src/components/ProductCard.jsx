import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ id, nombre, precio, imagen }) {
  const [quantity, setQuantity] = useState(0);

  function addOne() {
    setQuantity(quantity + 1);
  }

  function removeOne() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div style={{ border: '1px solid #444', padding: '15px', borderRadius: '8px', width: '240px', backgroundColor: '#222', textAlign: 'center', color: 'white' }}>
      <img src={imagen} alt={nombre} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3 style={{ fontSize: '18px', margin: '10px 0', minHeight: '44px' }}>{nombre}</h3>
      <p style={{ color: '#00ffcc', fontWeight: 'bold', fontSize: '20px' }}>${precio}</p>
      
      <div style={{ margin: '15px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <button onClick={removeOne} style={{ padding: '5px 10px' }}>-</button>
        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{quantity}</span>
        <button onClick={addOne} style={{ padding: '5px 10px' }}>+</button>
      </div>

      <Link to={`/producto/${id}`} style={{ color: '#ff9900', textDecoration: 'none', display: 'block', fontWeight: 'bold', marginTop: '10px' }}>
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
