import DeletionAlert from '@/components/main/cart/DeletionAlert';
import { Button } from '@/components/ui/button';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

type QuantitySelectorProps = {
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    isProductCard?: boolean;
}

export default function QuantitySelector({ quantity, onIncrement, onDecrement, isProductCard }: QuantitySelectorProps) {
    return (
        <div className="flex">
            {quantity === 1 && !isProductCard ? <DeletionAlert onClick={onDecrement}><Button size={'icon-sm'} variant={'outline'} className='rounded-br-none rounded-tr-none cursor-pointer'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></Button>
            </DeletionAlert> : <Button size={'icon-sm'} variant={'outline'} onClick={onDecrement} className='rounded-br-none rounded-tr-none'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></Button>
            }
            <div className="w-[30px] text-center flex justify-center items-center border">{quantity}</div>
            <Button size={'icon-sm'} variant={'outline'} onClick={onIncrement} className='rounded-bl-none rounded-tl-none cursor-pointer'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Button>
        </div>
    )
}
