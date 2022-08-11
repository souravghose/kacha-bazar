import { React, useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    fetch('products.json')
    .then(res => res.json())
    .then(data=> setProducts(data))
  }, [])
  return (
    <div className="shop-container container">
       <div className="headers my-4">
       <h2 className='text-center h2 mb-2'>Popular Products</h2>
       <p className="small text-center">
        Products that bought by the most of our customer.
       </p>
       </div>
      <div className="product-container">
      {
        products.map(product => <Product key={product.id} product={product}></Product>)
      }
      </div>
    </div>
  );
}

export default Shop;
