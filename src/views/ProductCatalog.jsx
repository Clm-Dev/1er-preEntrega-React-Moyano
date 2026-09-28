import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function ProductCatalog() {
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/datos/productos.json')
            .then((res) => res.json())
            .then((data) => {
                setProductList(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("Error loading JSON: ", err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading === true) {
        return <h2 style={{ color: 'white', textAlign: 'center' }}>Searching products in stock...</h2>;
    }

    return (
        <div>
            <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>Catálogo de Hardware</h1>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {productList.map((item) => {
                    return (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            nombre={item.nombre}
                            precio={item.precio}
                            imagen={item.imagen}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ProductCatalog;
