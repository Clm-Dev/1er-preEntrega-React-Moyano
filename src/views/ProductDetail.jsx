import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        fetch('/datos/productos.json')
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((p) => p.id === parseInt(id));
                if (found) {
                    setProduct(found);
                } else {
                    setHasError(true);
                }
            })
            .catch(() => setHasError(true));
    }, [id]);

    if (hasError) return <h3 style={{ color: 'red', textAlign: 'center' }}>The requested product does not exist.</h3>;
    if (!product) return <h3 style={{ color: 'white', textAlign: 'center' }}>Loading technical details...</h3>;

    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', border: '1px solid #333', backgroundColor: '#151515', borderRadius: '10px', color: 'white', textAlign: 'center' }}>
            <h2 style={{ color: '#00ffcc', marginBottom: '15px' }}>{product.nombre}</h2>
            <img src={product.imagen} alt={product.nombre} style={{ width: '200px', borderRadius: '5px', marginBottom: '15px' }} />
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff9900' }}>Price: ${product.precio}</p>
            <p style={{ color: 'gray', marginTop: '10px' }}>Unidades disponibles en stock:  {product.stock}</p>
        </div>
    );
}

export default ProductDetail;