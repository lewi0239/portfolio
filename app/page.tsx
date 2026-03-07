import { Suspense } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HeroBanner from "./components/Hero";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";

function ExpertiseSkeleton() {
    return (
        <section className="bg-white py-8 rounded-xl border border-gray-200 animate-pulse w-full">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <div className="h-9 w-40 bg-gray-200 rounded" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="bg-light-bg p-8 rounded-lg border border-gray-50 shadow-md">
                            <div className="h-16 w-16 bg-gray-200 rounded-full mb-6" />
                            <div className="h-5 w-2/3 bg-gray-200 rounded mb-4" />
                            <div className="flex flex-col gap-2">
                                <div className="h-4 bg-gray-200 rounded" />
                                <div className="h-4 bg-gray-200 rounded" />
                                <div className="h-4 w-4/5 bg-gray-200 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PortfolioSkeleton() {
    return (
        <section className="bg-white py-16 border rounded-xl border-gray-200 animate-pulse w-full">
            <div className="container mx-auto px-6">
                <div className="h-9 w-48 bg-gray-200 rounded mx-auto mb-8" />
                <div className="flex justify-center gap-4 mb-8">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-9 w-16 bg-gray-200 rounded" />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 p-8">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex flex-col overflow-hidden border border-slate-50 rounded-xl shadow-md">
                            <div className="w-full aspect-[3/2] bg-gray-200 rounded-t-xl" />
                            <div className="flex flex-col flex-1 p-3 bg-white gap-2">
                                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                                <div className="h-4 bg-gray-200 rounded" />
                                <div className="h-4 w-5/6 bg-gray-200 rounded" />
                                <div className="h-4 w-1/3 bg-gray-200 rounded mt-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const profileImage = "/images/profile.jpg";

    return (
        <main className="flex min-h-screen flex-col items-center gap-16 p-4 sm:p-8 md:p-16">
            <HeroBanner />

            <Suspense fallback={<ExpertiseSkeleton />}>
                <Expertise />
            </Suspense>

            <Suspense fallback={<PortfolioSkeleton />}>
                <Portfolio />
            </Suspense>

            <AboutMe profileImage={profileImage} />

            <Contact />
        </main>
    );
}
