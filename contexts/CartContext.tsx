'use client';
import { CartItem } from '@/data/types';
import React, { useContext, useState } from 'react'
import { toast } from 'sonner';

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    calculateTotal: () => void;
    clearCart: () => void;
    total?: number;
}

const CartContext = React.createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    updateQuantity: () => { },
    calculateTotal: () => { },
    clearCart: () => { },
    total: 0,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = React.useState<CartItem[]>([]);
    const [total, setTotal] = useState<number>(0);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existing = prevCart.find(i => i.id === item.id);
            if (existing) {
                return prevCart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
            }
            return [...prevCart, item];
        });
        toast.success("Item added to cart", )
    };
    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(item => item.id !== id));
        toast.success("Item removed from cart");
    }
    const clearCart = () => {
        setCart([]);
        toast.success("Cart cleared")
    }
    const calculateTotal = () => {
        setTotal(cart.reduce((total, item) => total + item.product.price * item.quantity, 0));
    }
    const updateQuantity = (id: string, quantity: number) => {
        setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, calculateTotal, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);