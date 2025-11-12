'use client'
import { Button } from "@/components/ui/button"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
} from "@/components/ui/item"
import { CartItem } from "@/data/types"

import { useState } from "react"
import { useCart } from "@/contexts/CartContext"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import DeletionAlert from "./DeletionAlert"
import { Separator } from "@/components/ui/separator"
import QuantitySelector from "@/app/(marketing)/product/components/QuantitySelector"


export function CartItemCard({ item }: { item: CartItem }) {
    const cart = useCart()
    const [quantity, setQuantity] = useState<number>(item.quantity);
    const totalForItem = item.product.price * quantity

    const handleQtyIncrement = () => {
        setQuantity(prev => {
            const newQty = prev + 1;
            setTimeout(() => {
                cart.updateQuantity(item.id, newQty);
            }, 1000)
            return newQty;
        });
    }
    const handleQtyDecrement = () => {
        setQuantity(prev => {
            if (prev === 1) {
                setTimeout(() => {
                    cart.removeFromCart(item.id);
                }, 200)
                return 1;
            }
            const newQty = Math.max(1, prev - 1);
            setTimeout(() => {
                cart.updateQuantity(item.id, newQty);
            }, 1000)
            return newQty;
        });
    }
    const handleDeletion = () => {
        cart.removeFromCart(item.id);
    }

    

    return (
        <div className="flex w-full max-w-md flex-col gap-6">
            <Item variant="outline">
                <ItemContent>
                    <ItemTitle><Image src={item.product.imagepath} alt="product-image" width={100} height={100}></Image></ItemTitle>
                    <ItemTitle className="font-semibold">{item.product.title}</ItemTitle>
                    <ItemDescription className="">
                        ${item.product.price} x {quantity}
                    </ItemDescription>
                    <Separator />
                    <ItemDescription className="">Total: ${totalForItem}</ItemDescription>
                </ItemContent>
                <ItemActions>
                    <QuantitySelector quantity={quantity} onIncrement={handleQtyIncrement} onDecrement={handleQtyDecrement} />
                    <DeletionAlert onClick={handleDeletion}>
                        <Button size={'icon-sm'} variant={'secondary'} className="cursor-pointer" title="Delete from cart"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
                    </DeletionAlert>
                </ItemActions>
            </Item>
        </div>
    )
}

