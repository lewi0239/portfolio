import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

// Metadata for the page
export const metadata: Metadata = {
    title: "Brodie's Portfolio",
    description: "Brodie  Lewis's portfolio - designed by Brodie Lewis",
};

// Root Layout Component
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head></head>
            <body className={`${roboto.className} bg-light-bg text-dark antialiased`}>
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
