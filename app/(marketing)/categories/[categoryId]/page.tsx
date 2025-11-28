'use client'
import ProductCard from '@/components/main/ui/ProductCard';
import { components, products } from '@/data/data';
import { useParams, useRouter } from 'next/navigation';

export default function CategoryPage() {
    const params = useParams<{categoryId: string}>();
    const categoryId = params.categoryId;
    const category = components.find(category => category.id === categoryId);
    const router = useRouter();
    if (!components.includes(category!)) {
        router.replace('/not-found')
    }
    console.log(categoryId);
    
    return (
        <main className='min-h-screen flex flex-col space-y-3 pt-20  px-10'>
            <div className={`w-full h-[150px] bg-linear-to-tr from-orange-500 to-yellow-300 flex justify-center flex-col rounded-3xl px-8`}>
                <h2 className='text-4xl font-bold text-white'>{category?.title}</h2>
                <h3 className='mt-3 text-white'>{category?.description}</h3>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {
                    products.filter(product => product.categoryId === params.categoryId).map((product) => (
                        <ProductCard key={product.id} product={product} width={200} height={1000}/>
                    ))
                }
            </div>
        </main>
    );
}
