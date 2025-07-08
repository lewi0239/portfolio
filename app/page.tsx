import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HeroBanner from "./components/Hero";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";

export default function Home() {
  const aboutMeProps = {
    name: "Brodie Lewis",
    title: "Full Stack Developer",
    description:
      "I am a passionate developer who loves creating beautiful and functional web applications.",
    socials: [
      "https://github.com/lewi0239", // Replace with your GitHub URL
      "https://www.linkedin.com/in/brodie-lewis/", // Replace with your LinkedIn URL
    ],
    profileImage: "/images/profile.jpg", // Using the default path from the component
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-4 sm:p-8 md:p-16">
      <HeroBanner />
      <Expertise />
      <Portfolio />
      <AboutMe {...aboutMeProps} />
      <Contact />
    </main>
  );
}
