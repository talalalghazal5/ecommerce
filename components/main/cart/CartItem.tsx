'use client'
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { CartItem, Product } from "@/data/types"
import { QuantitySelector } from "../ui/ProductCard"
import { useContext, useState } from "react"
import { useCart } from "@/contexts/CartContext"


export function CartItemCard({ item }: { item: CartItem }) {
    const cart = useCart()
    const [quantity, setQuantity] = useState<number>(item.quantity);

    const handleQtyIncrement = () => {
        // persist change to context and update local state
        setQuantity(prev => {
            const newQty = prev + 1;
            cart.updateQuantity(item.id, newQty);
            return newQty;
        });
    }
    const handleQtyDecrement = () => {
        setQuantity(prev => {
            if (prev === 1) {
                // remove item from cart when decrementing from 1
                cart.removeFromCart(item.id);
                return 1;
            }
            const newQty = Math.max(1, prev - 1);
            cart.updateQuantity(item.id, newQty);
            return newQty;
        });
    }
    return (
        <div className="flex w-full max-w-md flex-col gap-6">
            <Item variant="outline">
                <ItemContent>
                    <ItemTitle>{item.product.title}</ItemTitle>
                    <ItemDescription>
                        ${item.product.price}
                    </ItemDescription>
                </ItemContent>
                <ItemActions>
                    <QuantitySelector quantity={quantity} onIncrement={handleQtyIncrement} onDecrement={handleQtyDecrement} />
                </ItemActions>
            </Item>
        </div>
    )
}
