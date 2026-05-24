import type { Metadata } from "next";
import { Geist, Rouge_Script } from "next/font/google";
// import "../globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import AppFooter from "@/components/AppFooter";
import { CartProvider } from "@/contexts/CartContext";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import AppLogo from "@/components/AppLogo";
config.autoAddCss = false;

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const rougeScript = Rouge_Script({
    variable: "--font-rouge-script",
    subsets: ["latin"],
    weight: ["400"]
})

export const metadata: Metadata = {
    title: "Welcome to StoreBrand",
};

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={`${geistSans.className} ${rougeScript.variable} antialiased`}
        >
            <header className="px-6 py-3 flex items-center backdrop-blur-3xl z-50 justify-between fixed w-full border-b">
                <AppLogo />
            </header>
            {children}
            <Toaster position="bottom-center" />
            <AppFooter />
        </div>

    );
}
