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
                <EmptyTitle>No items yet</EmptyTitle>
                <EmptyDescription>
                    Go to products page and add some items to your cart!
                </EmptyDescription>
            </EmptyHeader>

        </Empty>
    )
    }
