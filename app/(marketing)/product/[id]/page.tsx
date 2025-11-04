'use client'
import { products } from '@/data/data';
import { useParams } from 'next/navigation'
import Image from 'next/image';
import React from 'react'
import { Lens } from '@/components/ui/lens';

export default function ProductPage() {
    const params = useParams<{ id: string }>();

    const id = params.id;
    const product = products.find((product) => product.id === id);

    return (
        <main className='min-h-screen flex justify-between items-start pt-20'>
            <div className="sticky top-20">
                <Lens zoomFactor={5} isStatic={false} lensSize={250} ariaLabel='Zoom Area'>
                    <Image src={product?.imagepath ?? ''} width={1000} height={1000} alt=''></Image>
                </Lens>
            </div>
            <div className="flex flex-col items-start justify-start w-full p-5">
                <h1 className="text-3xl font-semibold">{product?.title}</h1>
                <h1 className="text-xl font-semibold text-amber-500">${product?.price}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid delectus praesentium, nihil ipsam voluptatibus, laudantium maiores debitis iure quas accusamus tempore. Voluptatum optio velit dolor voluptatibus eos neque nihil quisquam?</p>
                <h3 className='mt-4 font-semibold '>Overview:</h3>
                <ul className=''>
                    <li className='list-disc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia eum cum, nesciunt nobis expedita a quae vel quisquam soluta facere ut minus culpa consequatur hic, commodi itaque repellendus eaque.</li>
                    <li className='list-disc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia eum cum, nesciunt nobis expedita a quae vel quisquam soluta facere ut minus culpa consequatur hic, commodi itaque repellendus eaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque esse, hic ipsam pariatur error facilis reprehenderit vitae excepturi exercitationem qui! Voluptate veritatis distinctio reiciendis, est illo quibusdam maiores similique molestias.</li>

                </ul>
            </div>
            <aside className='p-4 w-2xl h-screen border-l font-semibold'>
                <h2>Product details:</h2>
                <div className="flex justify-between items-center mt-3">
                    <h3 className='text-sm'>Processor:</h3>
                    <h3 className='text-sm text-gray-500 font-normal'>Apple M3 Ultra</h3>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <h3 className='text-sm'>RAM:</h3>
                    <h3 className='text-sm font-normal text-gray-500'>32GB </h3>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <h3 className='text-sm'>GPU:</h3>
                    <h3 className='text-sm font-normal text-gray-500'>Unified with processor</h3>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <h3 className='text-sm'>Display:</h3>
                    <h3 className='text-sm font-normal text-gray-500'>Liquid Retina (LTPO) @240Hz</h3>
                </div>

            </aside>
        </main>
    );
}
