import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Brodie Lewis | Full-Stack Developer",
    description:
        "Brodie Lewis is a full-stack developer specialising in web and mobile development, UI/UX design, and cross-platform applications.",
    openGraph: {
        title: "Brodie Lewis | Full-Stack Developer",
        description:
            "Brodie Lewis is a full-stack developer specialising in web and mobile development, UI/UX design, and cross-platform applications.",
        siteName: "Brodie Lewis Portfolio",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Brodie Lewis | Full-Stack Developer",
        description:
            "Brodie Lewis is a full-stack developer specialising in web and mobile development, UI/UX design, and cross-platform applications.",
    },
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
                <SpeedInsights />
            </body>
        </html>
    );
}
