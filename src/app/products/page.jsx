import Products from '@/components/Products';
import React from 'react';

const getProducts = async() => {
    const res = await fetch("http://localhost:4000/products", {next: {revalidate: 20} });
    return res.json();

}

const ProductsPage = async() => {
    const products = await getProducts();
    console.log(products);
    return (
      <div className='max-w-7xl mx-auto'>
        <h2>Products: {products.length} </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            products.map(product => <Products key={product.id} product={product} />)
          }
        </div>
      </div>
    );
};

export default ProductsPage;