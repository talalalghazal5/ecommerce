'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Category } from "@/data/types"
import 'boxicons/css/boxicons.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { ShineBorder } from "@/components/ui/shine-border";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function CategoryCard({ category }: { category: Category }) {
    const router = useRouter();
    return (
        <Card className={`w-full border-b-4 relative`}>
            {/* <ShineBorder borderWidth={2} shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} /> */}
            <CardHeader>
                <CardTitle className={`text-lg`}>{category.title}</CardTitle>
                <CardDescription className="text-black">
                    {category.description}
                </CardDescription>
                <CardAction className="text-6xl h-full flex items-center">
                    {
                        <FontAwesomeIcon icon={category.icon!} />
                    }
                </CardAction>
            </CardHeader>
            <CardContent>
                <RainbowButton variant={'outline'} onClick={() => router.push(`/categories/${category.id}`)}>Shop now</RainbowButton>
            </CardContent>
        </Card>
    )
}
