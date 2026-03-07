"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroBanner = () => {
    return (
        <section id="home" className="container m-auto p-12 bg-white rounded-xl border border-gray-200 md:mb-16 lg:mb:19 xl:mb-20">
            <div className="grid menu:grid-cols-2 gap-10 menu:gap-12 items-start menu:items-center">
                {/* Text Content */}
                <div className="text-center md:text-left flex flex-col max-w-[60ch] mx-auto md:mx-0">
                    <p className="text-lg font-semibold text-dark mb-2">Hey, I&apos;m Brodie</p>

                    <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight mb-4">
                        I create <span className="text-primary">meaningful</span> and{" "}
                        <span className="text-primary">innovative</span> solutions
                    </h1>

                    {/* FIX: no layout shift — absolute inside fixed height */}
                    <div className="relative h-[4.75rem] md:h-[3.25rem] mb-8 overflow-hidden">
                        <div className="absolute inset-0 flex items-center">
                            <TypeAnimation
                                sequence={[
                                    "I build full-stack web applications.", 1000,
                                    "I develop cross-platform and native mobile applications.", 1000,
                                    "I design user-centric UI/UX interfaces.", 1000,
                                    "I solve complex problems with code.", 1000,
                                    "I hold a Diploma in Mobile Application Design & Development.", 1000,
                                    "I have experience in financial planning.", 1000,
                                    "I build financial planning apps and analysis tools.", 1000,
                                ]}
                                wrapper="p"
                                speed={50}
                                className="text-lg text-gray-600 leading-snug"
                                repeat={Infinity}
                            />
                        </div>
                    </div>

                    {/* Button: force natural width */}
                    <Link
                        href="#contact"
                        className="inline-flex w-auto items-center
                        justify-center bg-primary text-white px-8 py-3 rounded-md
                        font-medium hover:bg-opacity-90 transition-colors self-center md:self-start"
                    >
                        Get In Touch
                    </Link>
                </div>

                {/* Image Content */}
                <div className="relative w-full max-w-sm mx-auto md:max-w-none">
                    <div className="relative z-10">
                        <Image
                            src="/images/profile.jpg"
                            alt="Brodie Lewis"
                            width={450}
                            height={450}
                            className="rounded-lg object-cover shadow-lg"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 rounded-lg
                        transform -rotate-6 translate-x-4 translate-y-4 z-0"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
