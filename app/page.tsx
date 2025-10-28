import { Button } from "@/components/ui/button";

import { CategoryCard } from "@/components/main/ui/CategoryCard";
import { components, products } from "@/data/data";
import ProductCard from "@/components/main/ui/ProductCard";
import Slogan from "@/components/main/Slogan";
import HeroImage from "@/components/main/HeroImage";
import CategoriesGrid from "@/components/main/CategoriesGrid";
import ProductsGrid from "@/components/main/ProductsGrid";
import NewsletterForm from "@/components/main/NewsletterForm";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center ">
      <section className="flex min-h-screen w-full items-center justify-around">
        <Slogan />
        <HeroImage />
      </section>
      <section className="flex flex-col justify-center items-center min-h-screen w-full p-4 bg-gray-100">
        <CategoriesGrid />
      </section>
      <section className="flex flex-col justify-center items-center min-h-screen w-full p-4">
        <ProductsGrid />
      </section>
      <section className="flex justify-evenly items-center w-full p-4 mt-4 h-[200px] bg-amber-600">
        <NewsletterForm />
      </section>
    </main>
  );
}
