import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import 'boxicons/css/boxicons.min.css'
export function EmptySection() {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <i className='bx bx-cart text-2xl text-black' ></i>
                </EmptyMedia>
                <EmptyTitle>Your cart is empty</EmptyTitle>
                <EmptyDescription>
                    Browse the catalog and add products you want to compare or buy later.
                </EmptyDescription>
            </EmptyHeader>

        </Empty>
    )
    }
