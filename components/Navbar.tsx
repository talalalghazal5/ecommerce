"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import 'boxicons/css/boxicons.min.css'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string, color: string }[] = [
    {
        title: "Laptops",
        href: "/docs/primitives/alert-dialog",
        description:
            "Find the best laptops that cover all your needs, the best value-price options.",
        color: 'hover:bg-chart-1/30 hover:text-chart-1',
    },
    {
        title: "Phones",
        href: "/docs/primitives/hover-card",
        description:
            "World's most famous mobile phones and the best quality.",
        color: 'hover:bg-chart-2/30 hover:text-chart-2',
    },
    {
        title: "Smart watches",
        href: "/docs/primitives/progress",
        description:
            "Keep control in your health and do your tasks on the go, all with a smartwatch with you.",
        color: 'hover:bg-chart-3/30 hover:text-chart-3',
    },
    {
        title: "Headphones",
        href: "/docs/primitives/scroll-area",
        description: "Turn your hearing experience into something different.",
        color: 'hover:bg-chart-4/30 hover:text-chart-4',
    },
    {
        title: "Tablets",
        href: "/docs/primitives/tabs",
        description:
            "Portable, powerful tablets that balance productivity and entertainment.", // — crisp displays, long battery life, responsive touch and stylus support, and versatile performance for work and play.
        color: 'hover:bg-chart-5/30 hover:text-chart-5',
    },
    {
        title: "Cameras",
        href: "/docs/primitives/tooltip",
        description:
            "Capture life's moments in stunning detail.", //— high-quality sensors and optics for sharp photos and smooth video, great low-light performance, and versatile features for every level of photographer.",
        color: 'hover:bg-chart-6/30 hover:text-chart-6',
    },
]
function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = React.useState(() => {
        if (typeof window === "undefined") return false
        return window.innerWidth < breakpoint
    })

    React.useEffect(() => {
        function onResize() {
            setIsMobile(window.innerWidth < breakpoint)
        }

        // initialize and subscribe
        onResize()
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [breakpoint])

    return isMobile
}

export function Navbar() {
    const isMobile = useIsMobile()

    return (
        <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className="flex-wrap">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    color={component.color}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/docs" className="flex flex-wrap"><i className="bx bx-store text-lg"></i>Products</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    color,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string, color:string}) {
    return (
        <li {...props}>
            <NavigationMenuLink className={color} asChild>
                <Link href={href}> 
                    <div className="text-lg leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-md leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
