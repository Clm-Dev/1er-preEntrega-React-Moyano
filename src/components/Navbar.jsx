import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // Creamos estados para controlar cuál enlace tiene el mouse encima
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverProducts, setHoverProducts] = useState(false);
  const [hoverCart, setHoverCart] = useState(false);

  // Estilo base para todos los enlaces
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.2s ease' // Hace que el cambio de color sea suave
  };

  return (
    <nav style={{ display: 'flex', alignItems: 'center' }}>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0 }}>
        
        {/* ENLACE: INICIO */}
        <li>
          <Link 
            to="/" 
            style={{ 
              ...linkStyle, 
              color: hoverHome ? '#00ffcc' : 'white' // Si está en hover, cambia a verde gamer
            }}
            onMouseEnter={() => setHoverHome(true)}
            onMouseLeave={() => setHoverHome(false)}
          >
            Inicio
          </Link>
        </li>

        {/* ENLACE: PRODUCTOS */}
        <li>
          <Link 
            to="/productos" 
            style={{ 
              ...linkStyle, 
              color: hoverProducts ? '#00ffcc' : 'white' 
            }}
            onMouseEnter={() => setHoverProducts(true)}
            onMouseLeave={() => setHoverProducts(false)}
          >
            Productos
          </Link>
        </li>

        {/* ENLACE: CARRITO */}
        <li>
          <Link 
            to="/carrito" 
            style={{ 
              ...linkStyle, 
              color: hoverCart ? '#00ffcc' : 'white' 
            }}
            onMouseEnter={() => setHoverCart(true)}
            onMouseLeave={() => setHoverCart(false)}
          >
            🛒 Carrito
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;