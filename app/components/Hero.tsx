"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroBanner = () => {
    return (
        <section id="home" className="container mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 } as const}
                    animate={{ opacity: 1, x: 0 } as const}
                    transition={{ duration: 0.8, ease: "easeOut" } as const}
                    className="text-center md:text-left"
                >
                    <p className="text-lg text-dark mb-2">Hey, I am Brodie</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight mb-4">
                        I create <span className="text-primary"> meaningful</span> and{" "}
                        <span className="text-primary">innovative</span> solutions
                    </h1>
                    <TypeAnimation
                        sequence={[
                            "I build full-stack web applications.",
                            1000,
                            "I develop cross-platform and native mobile applications.",
                            1000,
                            "I design user-centric UI/UX interfaces.",
                            1000,
                            "I solve complex problems with code.",
                            1000,
                            "I hold a Diploma in Mobile Application Design & Development.",
                            1000,
                            "I have experience in financial planning.",
                            1000,
                            "I build financial planning apps and analysis tools.",
                            1000,
                        ]}
                        wrapper="p"
                        speed={50}
                        className="text-lg text-gray-600 mb-8"
                        repeat={Infinity}
                    />
                    <Link
                        href="#contact"
                        className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                    >
                        Get In Touch
                    </Link>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 } as const}
                    animate={{ opacity: 1, x: 0 } as const}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 } as const}
                    className="relative w-full max-w-sm mx-auto md:max-w-none"
                >
                    <div className="relative z-10">
                        <Image
                            src="/images/profile.jpg" // Using existing profile image as placeholder
                            alt="Brodie Lewis"
                            width={450}
                            height={450}
                            className="rounded-lg object-cover shadow-lg"
                            priority
                        />
                    </div>
                    {/* Decorative background shape */}
                    <div className="absolute inset-0 bg-primary/20 rounded-lg transform -rotate-6 translate-x-4 translate-y-4 z-0"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroBanner;
