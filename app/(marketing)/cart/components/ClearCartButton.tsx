import DeletionAlert from '@/components/main/cart/DeletionAlert';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext'
import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function ClearCartButton() {
    const cartProvider = useCart();
    const handleClearCart = () => {
        cartProvider.clearCart();
    }
    return (
        <DeletionAlert onClick={handleClearCart}>
            <Button variant={'ghost'} className='text-red-700 cursor-pointer hover:text-red-700 hover:bg-red-100'>
                <FontAwesomeIcon icon={faMultiply} />Clear cart
            </Button>
        </DeletionAlert>
    )
}
