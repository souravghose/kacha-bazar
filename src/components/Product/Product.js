import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Product = ({product}) => {
    const {name, img, price, quantity} = product
    return (
           <div>
           
           <div className="single-product">
                <img className='product-image d-block m-auto' src={img} alt=""/>
                <h5 className='product-name mt-5'>{name}</h5>
                <div className='d-flex justify-content-between align-items-center mt-1'>
                    <p className='product-price'>${price}</p>
                    <button className='btn cart-btn-product'><FontAwesomeIcon icon={faCartPlus}/></button>
                </div>

           </div>
           </div>
            

    );
};

export default Product;