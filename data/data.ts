import { faCamera, faClock, faHeadphones, faLaptop, faMobile, faTablet } from "@fortawesome/free-solid-svg-icons";
import { Category } from "./types";

export const components: Category[] = [
    {
        title: "Laptops",
        href: "/docs/primitives/alert-dialog",
        description:
            "Find the best laptops that cover all your needs, the best value-price options.",
        colorClass: 'hover:bg-chart-1/30 hover:text-chart-1',
        color: 'chart-1',
        icon: faLaptop,
    },
    {
        title: "Phones",
        href: "/docs/primitives/hover-card",
        description:
            "World's most famous mobile phones and the best quality.",
        colorClass: 'hover:bg-chart-2/30 hover:text-chart-2',
        color: 'chart-2',
        icon: faMobile,
    },
    {
        title: "Smart watches",
        href: "/docs/primitives/progress",
        description:
            "Keep control in your health and do your tasks on the go, all with a smartwatch with you.",
        colorClass: 'hover:bg-chart-3/30 hover:text-chart-3',
        color: 'chart-3',
        icon: faClock
    },
    {
        title: "Headphones",
        href: "/docs/primitives/scroll-area",
        description: "Turn your hearing experience into something different.",
        colorClass: 'hover:bg-chart-4/30 hover:text-chart-4',
        color: 'chart-4',
        icon: faHeadphones ,
    },
    {
        title: "Tablets",
        href: "/docs/primitives/tabs",
        description:
            "Portable, powerful tablets that balance productivity and entertainment.", // — crisp displays, long battery life, responsive touch and stylus support, and versatile performance for work and play.
        colorClass: 'hover:bg-chart-5/30 hover:text-chart-5',
        color: 'chart-5',
        icon: faTablet ,
    },
    {
        title: "Cameras",
        href: "/docs/primitives/tooltip",
        description:
            "Capture life's moments in stunning detail.", //— high-quality sensors and optics for sharp photos and smooth video, great low-light performance, and versatile features for every level of photographer.",
        colorClass: 'hover:bg-chart-6/30 hover:text-chart-6',
        color: 'chart-6',
        icon: faCamera ,
    },
]