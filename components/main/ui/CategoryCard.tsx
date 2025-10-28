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

export function CategoryCard({ category }: { category: Category }) {
    return (
        <Card className={`w-full border-b-4 border-${category.color}`}>
            <CardHeader>
                <CardTitle className={`text-${category.color} text-lg`}>{category.title}</CardTitle>
                <CardDescription className="text-black">
                    Enter your email below to login to your account
                </CardDescription>
                <CardAction className="text-6xl h-full flex items-center">
                    {
                        <FontAwesomeIcon className={`text-${category.color}`} icon={category.icon!}/>
                    }
                </CardAction>   
            </CardHeader>
            <CardContent>
                <Button className={`mt-4 bg-${category.color} cursor-pointer`}>Shop now</Button>
            </CardContent>
        </Card> 
    )
}
