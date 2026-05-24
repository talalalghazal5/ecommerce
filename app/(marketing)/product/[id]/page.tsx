'use client'
import { products } from '@/data/data';
import { useParams } from 'next/navigation'
import Image from 'next/image';
import React from 'react'
import { Lens } from '@/components/ui/lens';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AddToCartButton from '../components/AddToCartButton';
import { Rating, RatingButton } from '@/components/ui/shadcn-io/rating';
import { ScrollProgress } from '@/components/ui/scroll-progress';

const productStory: Record<string, { overview: string; bullets: string[]; details: string }> = {
    laptops: {
        overview: 'Built for fast performance, long work sessions, and dependable day-to-day productivity.',
        bullets: [
            'Powerful processors and fast storage keep demanding apps responsive.',
            'Lightweight builds and bright displays make them ideal for work on the move.',
        ],
        details: 'These laptops are a strong fit for creators, students, and professionals who want a reliable machine that can handle multitasking without slowing down.',
    },
    phones: {
        overview: 'Designed for everyday communication, mobile photography, and smooth performance.',
        bullets: [
            'Advanced cameras capture sharp photos and stable video in more lighting conditions.',
            'All-day battery life and fast charging help the phone stay ready throughout the day.',
        ],
        details: 'Modern flagship phones combine premium materials, strong battery efficiency, and polished software for a balanced premium experience.',
    },
    smartwatches: {
        overview: 'A wearable that keeps health metrics, notifications, and workouts close at hand.',
        bullets: [
            'Fitness tracking and health insights help you keep an eye on daily activity.',
            'Compact design and smart alerts make it practical for both training and everyday wear.',
        ],
        details: 'Smartwatches in this line focus on dependable tracking, convenience, and a clean interface that pairs well with your phone.',
    },
    headphones: {
        overview: 'Built for immersive listening, calls, and long sessions of focused work.',
        bullets: [
            'Noise cancellation reduces distractions on commutes and in open workspaces.',
            'Balanced sound and comfortable ear cushions make extended wear easier.',
        ],
        details: 'These headphones are ideal for people who want clear audio, strong comfort, and a premium wireless experience.',
    },
    tablets: {
        overview: 'A flexible large-screen device for entertainment, note-taking, and light creative work.',
        bullets: [
            'Responsive touch input and a roomy display make multitasking feel natural.',
            'Portable hardware gives you a bigger workspace without the bulk of a laptop.',
        ],
        details: 'Tablets in this category are a good middle ground between a phone and a laptop, especially for reading, sketching, and streaming.',
    },
    cameras: {
        overview: 'Creator-focused cameras for detailed stills and clean video capture.',
        bullets: [
            'Large sensors and fast autofocus help capture sharp results in varied lighting.',
            'Manual controls give photographers more freedom when shaping the final image.',
        ],
        details: 'These cameras suit people who want more control over image quality and a more intentional shooting workflow.',
    },
};

export default function ProductPage() {
    const params = useParams<{ id: string }>();

    const id = params.id;
    const product = products.find((product) => product.id === id);
    const story = product ? productStory[product.categoryId] : undefined;

    return (
        <main className='min-h-screen flex justify-between items-start pt-20'>
            <ScrollProgress className='top-[65px] h-0.5'/>
            <div className="sticky top-20">
                <Lens zoomFactor={5} isStatic={false} lensSize={250} ariaLabel='Zoom Area'>
                    <Image src={product?.imagepath ?? ''} width={1000} height={1000} alt=''></Image>
                </Lens>
            </div>
            <div className="flex flex-col items-start justify-start w-full p-5">
                <h1 className="text-3xl font-semibold">{product?.title}</h1>
                <div className="flex items-start space-x-1">
                    <p className='text-xl'>98</p>
                    <Rating className='gap-0' defaultValue={3.5} readOnly>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <RatingButton className='text-yellow-500' key={index}></RatingButton>
                        ))}
                    </Rating>
                </div>
                <h1 className="text-xl font-semibold text-amber-500">${product?.price}</h1>
                <p>{product?.description}</p>
                <h3 className='mt-4 font-semibold '>Overview:</h3>
                <ul className=''>
                    <li className='list-disc'>{story?.overview}</li>
                    <li className='list-disc'>{story?.bullets[0]}</li>
                    <li className='list-disc'>{story?.bullets[1]}</li>

                </ul>
            </div>
            <aside className='p-4 w-2xl h-screen border-l font-semibold'>
                <AddToCartButton product={product!} />
                <h2>Product details:</h2>
                <p className='font-normal text-sm'>{story?.details}</p>
            </aside>
        </main>
    );
}
