import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const productsData = useContext(ProductDataContext)

  const {productId} = useParams() //to access dynamic parameters from the URL

  const selectedProduct = productsData.find((elem)=>elem.id == productId)
  
  if (!selectedProduct) {
  return <h1>Loading...</h1>;

}
  
  return (
    <div className='pd'>
      <img src={selectedProduct.image} alt="" />
      <h1>{selectedProduct.title}</h1>
      <h1>{selectedProduct.price}</h1>
      <h1>{selectedProduct.description}</h1>
      <h1>{selectedProduct.category}</h1>
      <h1>{selectedProduct.rating.rate}</h1>
      <h1>{selectedProduct.rating.count}</h1>
    </div>
  )
}

export default ProductDetails