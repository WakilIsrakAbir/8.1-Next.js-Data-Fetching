import Image from 'next/image';
import React from 'react';

const Products = ({product}) => {

    const { id, title, price, description, category, imageUrl } = product;

    return (
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title"> {title} </h2>
          <p>
            {description}
          </p>
          <p> ${price} </p>
          <p> {category} </p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Products;