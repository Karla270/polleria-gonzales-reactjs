import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        const products = cart.reduce((total, item) => {
            return total + item.quantity
        }, 0)

        setCount(products)

    }, [cart])

    const addItem = (item, cantidad) => {
        const purchase = { ...item, quantity: cantidad }
        const existsInCart = cart.find((prod) => prod.id === item.id)
        if (existsInCart) {
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + cantidad }
                } else {
                    return prod
                }
            })
            setCart(carritoActualizado)
        } else {
            setCart([...cart, purchase])
        }

    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.quantity, 0).toFixed(2)
    }
    return (
        <CartContext.Provider value={{ cart, count, clear, removeItem, isInCart, addItem, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)