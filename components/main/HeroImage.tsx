import React from 'react'
import Image from "next/image";
import heroImage from '../public/images/product006.png';
import secondHeroImage from '../public/images/product009.png';
import thirdHeroImage from '../public/images/product016.png';
import fourthHeroImage from '../public/images/product002.png';

export default function HeroImage() {
  return (
    <div className="relative">
      <Image src={heroImage} alt="hero image" width={400} height={400} className="relative"></Image>
      <Image src={secondHeroImage} alt="second hero image" width={400} height={400} className="absolute top-0 right-50"></Image>
      <Image src={thirdHeroImage} alt="second hero image" width={300} height={300} className="absolute bottom-[-10] left-30"></Image>
      <Image src={fourthHeroImage} alt="second hero image" width={300} height={300} className="absolute bottom-[-10] right-40"></Image>
      <div className="w-100 h-5 absolute rounded-full blur-xl bg-gray-300 right-10" />
    </div>
  )
}
