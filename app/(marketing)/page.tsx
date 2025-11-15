import Slogan from "@/components/main/Slogan";
import HeroImage from "@/components/main/HeroImage";
import CategoriesGrid from "@/components/main/CategoriesGrid";
import ProductsGrid from "@/components/main/ProductsGrid";
import NewsletterForm from "@/components/main/NewsletterForm";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center ">
      <section className="flex min-h-screen w-full items-center justify-around">
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_left,white,transparent)]", "z-[-1]"
          ) } width={40}
          height={40}
          squares={[80, 80]}
          squaresClassName="hover:fill-blue-500"/>
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
