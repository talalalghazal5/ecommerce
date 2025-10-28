import {
  faCamera,
  faClock,
  faHeadphones,
  faLaptop,
  faMobile,
  faTablet,
} from "@fortawesome/free-solid-svg-icons";
import { Category, Product } from "./types";
import img from "../public/images/product003.png";

export const components: Category[] = [
  {
    title: "Laptops",
    href: "/docs/primitives/alert-dialog",
    description:
      "Find the best laptops that cover all your needs, the best value-price options.",
    colorClass: "hover:bg-chart-1/30 hover:text-chart-1",
    color: "chart-1",
    icon: faLaptop,
  },
  {
    title: "Phones",
    href: "/docs/primitives/hover-card",
    description: "World's most famous mobile phones and the best quality.",
    colorClass: "hover:bg-chart-2/30 hover:text-chart-2",
    color: "chart-2",
    icon: faMobile,
  },
  {
    title: "Smart watches",
    href: "/docs/primitives/progress",
    description:
      "Keep control in your health and do your tasks on the go, all with a smartwatch with you.",
    colorClass: "hover:bg-chart-3/30 hover:text-chart-3",
    color: "chart-3",
    icon: faClock,
  },
  {
    title: "Headphones",
    href: "/docs/primitives/scroll-area",
    description: "Turn your hearing experience into something different.",
    colorClass: "hover:bg-chart-4/30 hover:text-chart-4",
    color: "chart-4",
    icon: faHeadphones,
  },
  {
    title: "Tablets",
    href: "/docs/primitives/tabs",
    description:
      "Portable, powerful tablets that balance productivity and entertainment.", // — crisp displays, long battery life, responsive touch and stylus support, and versatile performance for work and play.
    colorClass: "hover:bg-chart-5/30 hover:text-chart-5",
    color: "chart-5",
    icon: faTablet,
  },
  {
    title: "Cameras",
    href: "/docs/primitives/tooltip",
    description: "Capture life's moments in stunning detail.", //— high-quality sensors and optics for sharp photos and smooth video, great low-light performance, and versatile features for every level of photographer.",
    colorClass: "hover:bg-chart-6/30 hover:text-chart-6",
    color: "chart-6",
    icon: faCamera,
  },
];

export const products: Product[] = [
    {
        id: "1",
        title: "iPhone 16 Pro Max",
        description: "The best iPhone in market and the most expensive",
        price: 1199,
        imagepath: "/images/product003.png",
        href: "/products/iphone-16-pro-max",
    },
    {
        id: "2",
        title: "MacBook Pro M3",
        description: "Professional laptop with exceptional performance",
        price: 1999,
        imagepath: "/images/product010.png",
        href: "/products/macbook-pro-m3",
    },
    {
        id: "3",
        title: "Apple Watch Series 9",
        description: "Advanced health monitoring and connectivity",
        price: 399,
        imagepath: "/images/product013.png",
        href: "/products/apple-watch-9",
    },
    {
        id: "4",
        title: "AirPods Pro",
        description: "Premium wireless earbuds with noise cancellation",
        price: 249,
        imagepath: "/images/product008.png",
        href: "/products/airpods-pro",
    },
    {
        id: "5",
        title: "iPad Pro 12.9",
        description: "Powerful tablet for creativity and productivity",
        price: 1099,
        imagepath: "/images/product020.png",
        href: "/products/ipad-pro",
    },
    {
        id: "6",
        title: "Canon EOS R5",
        description: "Professional mirrorless camera for photography",
        price: 3899,
        imagepath: "/images/product016.png",
        href: "/products/canon-eos-r5",
    }
];
