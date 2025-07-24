import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HeroBanner from "./components/Hero";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";

export default function Home() {
    const profileImage = "/images/profile.jpg";
    return (
        <main className="flex min-h-screen flex-col items-center gap-16 p-4 sm:p-8 md:p-16">
            <HeroBanner />
            <Expertise />
            <Portfolio />
            <AboutMe profileImage={profileImage} />
            <Contact />
        </main>
    );
}












