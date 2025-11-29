import { Button } from '@/components/ui/button'
import React from 'react'

export default function CheckoutButton({disabled} : {disabled: boolean}) {
    return (
        <Button disabled={disabled} className='w-full cursor-pointer'>Continue to checkout</Button>
    )
}
