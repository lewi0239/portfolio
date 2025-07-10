// components/AboutMe.tsx
import React from "react";
import Image from "next/image";

type AboutMeProps = {
  profileImage: string;
};

const AboutMe: React.FC<AboutMeProps> = ({ profileImage }) => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Content */}
          <div className="relative w-full max-w-sm mx-auto md:max-w-none">
            <div className="relative z-10">
              <Image
                src={profileImage}
                alt="About Me Image"
                width={450}
                height={500}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-primary/20 rounded-lg transform rotate-6 scale-105 z-0"></div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              About Me
            </h2>
            <p className="text-gray-600 leading-relaxed mt-4">
              I am a passionate developer who loves creating beautiful and
              functional web applications. I enjoy building and solving problems
              with code that have a positive impact on people&apos;s lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
