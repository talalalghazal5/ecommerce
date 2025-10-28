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
import { useState } from "react"

export function CartItemCard({ item }: { item: CartItem }) {
    const [quantity, setQuantity] = useState<number>(item.quantity);

    const handleQtyIncrement = () => {
        setQuantity(quantity + 1);
    }
    const handleQtyDecrement = () => {
        setQuantity(Math.max(1, quantity - 1));
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
                    <QuantitySelector quantity={item.quantity} onIncrement={handleQtyIncrement} onDecrement={handleQtyDecrement}/>
                </ItemActions>
            </Item>
        </div>
    )
}
