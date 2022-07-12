import React, {useState} from 'react'

import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCartFunction from './AddToCartFunction.jsx';

function AddToCartOverview ({skus, productName, styleName, thumbnailURL}) {
  const [sizeOption, setSizeOption] = useState('');
  const [quantityAvailable, setQuantityAvailable] = useState(0);
  const [quantityDisabled, setQuantityDisabled] = useState(true);
  const [quantityPurchased, setQuantityPurchased] = useState(0);
  const [itemsInCart, setItemsInCart] = useState([]);

  const activateQuantity = (size) => {
    if (size != 'Select Size') {
      setQuantityDisabled(false);
    } else {
      setQuantityDisabled(true);
      setQuantityPurchased('Select Quantity')
    }
  }

  console.log(itemsInCart, 'current Cart Status in AddCartOverview')

  return (
    <div>
      <div>Add to Cart Overall Function</div>
      <div>{sizeOption}</div>
      <SizeSelector skus = {skus} activateQuantity = {activateQuantity} setSizeOption = {setSizeOption} setQuantityAvailable = {setQuantityAvailable}/>
      <QuantitySelector quantityDisabled = {quantityDisabled} quantityAvailable = {quantityAvailable} setQuantityPurchased = {setQuantityPurchased}/>
      <AddToCartFunction sizeOption = {sizeOption} quantityDisabled = {quantityDisabled} quantityPurchased = {quantityPurchased} setItemsInCart = {setItemsInCart} productName = {productName} styleName = {styleName} thumbnailURL = {thumbnailURL} itemsInCart = {itemsInCart} setItemsInCart = {setItemsInCart}/>
    </div>
  )
}

export default AddToCartOverview;