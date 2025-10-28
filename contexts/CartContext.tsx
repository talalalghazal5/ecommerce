'use client';
import { CartItem } from '@/data/types';
import React, { useContext } from 'react'

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
}

const CartContext = React.createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    updateQuantity: () => { },
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = React.useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existing = prevCart.find(i => i.id === item.id);
            if (existing) {
                // merge by increasing quantity
                return prevCart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
            }
            return [...prevCart, item];
        });
    };
    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id));
    }
    const clearCart = () => {
        setCart([]);
    }
    const updateQuantity = (id: string, quantity: number) => {
        setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);