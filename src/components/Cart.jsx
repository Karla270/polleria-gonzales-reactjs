import { Box, Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const { cart, cartTotal, clear } = useCart()
  const navegar = useNavigate()
  return (
    <div className="pb-5">
      {
        !cart.length
          ? <div className='p-5'>
            <h1 className='text-warning'>¡Tu carrito esta vacio!</h1>
            <h4 className='text-info p-3'>Te invitamos a ver nuestros productos</h4>
            <Button variant="contained" color="success" className='mt-2' onClick={() => navegar('/')}>Ir a comprar</Button>
          </div>
          : <div className="container py-4">
            <div className="card body">
              <h1><u>Tu carrito</u></h1>
              {cart.map((compra) => <CartItem key={compra.id} compra={compra} />)}
              <h3 className='pt-2'>Total a pagar : S/ {cartTotal()}</h3>
              <Box className='py-3'>
                <ButtonGroup>
                  <ButtonGroup>
                    <Button variant="contained"
                      color="warning"
                      onClick={clear}
                    >
                      Vaciar Carrito
                    </Button>
                  </ButtonGroup>
                  <Box className='mx-1'>
                  </Box>
                  <ButtonGroup>
                    <Button variant="contained"
                      color="success"
                      onClick={() => navegar('/checkout')}
                    >
                      Terminar compra
                    </Button>
                  </ButtonGroup>
                </ButtonGroup>
              </Box>
            </div>
          </div>
      }
    </div>
  )
}

export default Cart