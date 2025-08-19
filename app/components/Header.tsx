"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
    { href: "#", label: "Home" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About me" },
    {
        href: "https://drive.google.com/file/d/1i-hcpqTiFfX6cv_1MP8ejmF4AmDEzn8Y/view?usp=sharing",
        label: "Resume",
    },
    {
        href: "https://github.com/lewi0239/portfolio",
        label: "Portfolio Source",
    },
    { href: "#contact", label: "Contact Me", isButton: true },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold text-dark">
                    <Link href="#">Brodie Lewis</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden menu:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isExternal = link.href.startsWith("http");
                        const linkProps = {
                            href: link.href,
                            ...(isExternal && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                            }),
                        };

                        if (link.isButton) {
                            return (
                                <Link
                                    key={link.label}
                                    {...linkProps}
                                    className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            );
                        }

                        return (
                            <Link
                                key={link.label}
                                {...linkProps}
                                className="text-dark hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <div className="menu:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <XMarkIcon className="h-6 w-6 text-dark" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-dark" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="menu:hidden px-6 pb-4 flex flex-col space-y-4 bg-white shadow-md">
                    {navLinks.map((link) => {
                        const isExternal = link.href.startsWith("http");
                        const linkProps = {
                            href: link.href,
                            onClick: () => setIsOpen(false),
                            ...(isExternal && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                            }),
                        };

                        if (link.isButton) {
                            return (
                                <Link
                                    key={link.label}
                                    {...linkProps}
                                    className="border border-primary text-primary px-4 py-2 rounded-md text-center hover:bg-primary hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            );
                        }

                        return (
                            <Link
                                key={link.label}
                                {...linkProps}
                                className="text-dark hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );
};

export default Header;
