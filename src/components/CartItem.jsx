import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({ compra }) => {
  const { removeItem } = useCart()
  return (
    <div className='carrito'>
      <ul className='list-group'>
        <li className='item row'>
          <img src={require(`../assets/products/${compra.image}`)} alt={compra.name} className='carrito-img col-sm-2 py-1' />
          <span className='col-sm-4'>{compra.name}</span>
          <span className='col-sm-2'>{compra.quantity}</span>
          <span className='col-sm-2'>S/ {compra.price.toFixed(2)}</span>
          <button className='btn btn-danger col-auto text-right' onClick={() => removeItem(compra.id)}>X</button>
        </li>
      </ul>
    </div>

  )
}

export default CartItem