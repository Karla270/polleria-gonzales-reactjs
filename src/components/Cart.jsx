import { Box, Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const { cart, cartTotal, clear } = useCart()
  const navegar = useNavigate()
  return (
    <div>
      {
        !cart.length
          ? <div className='p-5'>
            <h2 className='text-warning'>Tu carrito esta vacio!</h2>
            <h4 className='text-info p-3'>Te invitamos a ver nuestros productos</h4>
            <Button variant="contained" color="success" className='mt-2' onClick={() => navegar('/')}>Ir a comprar</Button>
          </div>
          : <div className="container py-5">
            <div className="card body py-3">
              <h2><u>Tu carrito</u></h2>
              {cart.map((compra) => <CartItem key={compra.id} compra={compra} />)}
              <h1>Total a pagar : S/ {cartTotal()}</h1>
              <Box className='mt-3'>
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
                      onClick={() => navegar('/')}
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