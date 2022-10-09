import { createContext, useContext, useEffect, useState } from "react";
import { useAlert } from "./AlertContext";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(sessionStorage.getItem('carrito') ? JSON.parse(sessionStorage.getItem('carrito')) : [])
    const [count, setCount] = useState(0)
    const [user, setUser] = useState(sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {})
    const { openAlert } = useAlert()

    useEffect(() => {
        const products = cart.reduce((total, item) => {
            return total + item.quantity
        }, 0)

        setCount(products)

        if (cart.length > 0) sessionStorage.setItem('carrito', JSON.stringify(cart))

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
        openAlert("success", "Producto agregado con éxito!")
    }

    const clear = () => {
        setCart([])
        sessionStorage.removeItem('carrito');
        openAlert("info", "Se limpió el carrito!")

    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
        openAlert("success", "Producto removido con éxito!")
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.quantity, 0).toFixed(2)
    }

    const saveUser = (user) => {
        setUser(JSON.parse(user))
        sessionStorage.setItem('user', user);
        openAlert("success", "Inicio de sesión exitoso!")
    }

    const clearUser = () => {
        setUser({})
        sessionStorage.removeItem('user')
    }

    return (
        <CartContext.Provider value={{ cart, count, clear, removeItem, isInCart, addItem, cartTotal, saveUser, clearUser, user }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)