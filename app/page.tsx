import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from '../public/images/product006.png';
import secondHeroImage from '../public/images/product009.png';
import thirdHeroImage from '../public/images/product016.png';
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <main className="flex min-h-screen w-full items-center justify-around">
        <div>
          <h1 className="text-5xl font-bold">Shopping became <span className="font-rouge text-7xl text-amber-500">premium.</span></h1>
            <h2 className="mt-3 mb-4 max-w-2xl text-md text-gray-700">
            Discover a truly elevated shopping experience — curated collections handpicked for quality and style, effortless one-click checkout.
            </h2>
            <Button className="bg-blue-700 cursor-pointer hover:bg-blue-900 text-sm" size={"lg"}>Go shopping</Button>
        </div>
        <div className="relative">
          <Image src={heroImage} alt="hero image" width={400} height={400} className="relative"></Image>
          <Image src={secondHeroImage} alt="second hero image" width={400} height={400} className="absolute top-0 right-50"></Image>
          <Image src={thirdHeroImage} alt="second hero image" width={300} height={300} className="absolute bottom-[-10] left-30"></Image>
          <Image src={fourthHeroImage} alt="second hero image" width={300} height={300} className="absolute bottom-[-10] right-40"></Image>
          <div className="w-100 h-5 absolute rounded-full blur-xl bg-gray-300 right-10">
            
          </div>
        </div> 
      </main>
    </div>
  );
}
