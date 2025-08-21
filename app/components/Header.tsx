"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CvDownloadButton from "./CvDownloadButton";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About me" },
    { href: "https://github.com/lewi0239/portfolio", label: "Portfolio Source" },
    { href: "#contact", label: "Contact Me" },
    { href: "resume", label: "Resume" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Reusable renderer so desktop & mobile menus stay in sync
    const renderItem = (link: (typeof navLinks)[number], isMobile = false) => {
        if (link.label === "Resume") {
            return (
                <div key="resume" className={isMobile ? "text-center" : ""}>
                    <CvDownloadButton />
                </div>
            );
        }

        const isExternal = link.href.startsWith("http");
        const linkProps = {
            href: link.href,
            ...(isExternal && { target: "_blank", rel: "noopener noreferrer" }),
        };


        return (
            <Link
                key={link.label}
                {...linkProps}
                onClick={isMobile ? () => setIsOpen(false) : undefined}
                className="text-dark hover:text-primary transition-colors"
            >
                {link.label}
            </Link>
        );
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-dark">
                    <Link href="/">Brodie Lewis</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden menu:flex items-center space-x-8">
                    {navLinks.map((l) => renderItem(l))}
                </div>

                {/* Mobile Menu Button */}
                <div className="menu:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XMarkIcon className="h-6 w-6 text-dark" /> : <Bars3Icon className="h-6 w-6 text-dark" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="menu:hidden px-6 pb-4 flex flex-col space-y-4 bg-white shadow-md">
                    {navLinks.map((l) => renderItem(l, true))}
                </div>
            )}
        </header>
    );
};

export default Header;
