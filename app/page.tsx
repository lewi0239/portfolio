// app/page.tsx
import { Suspense } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HeroBanner from "./components/Hero";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";

function SectionSkeleton({ className = "" }: { className?: string }) {
    return <div className={`w-full max-w-6xl rounded-xl bg-white/60 h-40 animate-pulse ${className}`} />;
}

export default function Home() {
    const profileImage = "/images/profile.jpg";

    return (
        <main className="flex min-h-screen flex-col items-center gap-16 p-4 sm:p-8 md:p-16">
            {/* ✅ Streams instantly */}
            <HeroBanner />

            {/* Wrap any section that does server fetches */}
            <Suspense fallback={<SectionSkeleton />}>
                <Expertise />
            </Suspense>

            <Suspense fallback={<SectionSkeleton className="h-[28rem]" />}>
                <Portfolio />
            </Suspense>

            {/* Static / fast components can stay outside Suspense */}
            <AboutMe profileImage={profileImage} />
            <Contact />
        </main>
    );
}
