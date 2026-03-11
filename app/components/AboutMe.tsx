// components/AboutMe.tsx
import React from 'react';
import Image from 'next/image';

type AboutMeProps = {
  profileImage: string;
};

const AboutMe: React.FC<AboutMeProps> = ({ profileImage }) => {
  return (
    <section id="about" className="rounded-xl border border-gray-200 bg-white py-24">
      <div className="container mx-auto px-8">
        <div className="grid items-center gap-12 md:grid-cols-1 xl:grid-cols-2">
          {/* Image Content */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-sm">
            <div className="relative z-10">
              <Image
                src={profileImage}
                alt="About Me Image"
                width={450}
                height={450}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute inset-0 z-0 rotate-6 scale-100 transform rounded-lg bg-primary/20"></div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="mb-6 text-4xl font-bold text-dark menu:text-5xl">About Me</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Full-stack developer with hands-on experience in TypeScript, RESTful API development,
              and UX/UI design. Winner of the 2025 Algonquin College Tech Showcase. Led a team to
              deliver a mobile app MVP under tight deadlines, with a focus on strong technical
              documentation and driving projects to completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
