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
import { useContext, useEffect, useState } from "react"
import { useCart } from "@/contexts/CartContext"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { toast } from "sonner"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import DeletionAlert from "./DeletionAlert"


export function CartItemCard({ item }: { item: CartItem }) {
    const cart = useCart()
    const [quantity, setQuantity] = useState<number>(item.quantity);
    const totalForItem = item.product.price * quantity

    const handleQtyIncrement = () => {
        // persist change to context and update local state
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
                // remove item from cart when decrementing from 1
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

    // const deletionDialog = (): React.ReactNode => {
    //     return (

    //     )
    // }

    return (
        <div className="flex w-full max-w-md flex-col gap-6">
            <Item variant="outline">
                <ItemContent>
                    <ItemTitle><Image src={item.product.imagepath} alt="product-image" width={100} height={100}></Image></ItemTitle>
                    <ItemTitle className="font-semibold">{item.product.title}</ItemTitle>
                    <ItemDescription className="">
                        ${item.product.price}
                    </ItemDescription>
                    <ItemDescription className="text-end">Total: ${totalForItem}</ItemDescription>
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

