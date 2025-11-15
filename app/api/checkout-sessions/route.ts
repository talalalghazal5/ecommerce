import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";

export async function POST() {
    try {
        const headers = await headers();
        const origin = headers.get('origin');
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: ''
                }
            ]
        })
    } catch (error) {
        
    }
}