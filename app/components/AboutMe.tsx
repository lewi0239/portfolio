// components/AboutMe.tsx
import React from "react";
import Image from 'next/image';

type AboutMeProps = {
  description: string;
  profileImage: string;
};

const AboutMe: React.FC<AboutMeProps> = ({ description, profileImage }) => {
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
            <p className="text-lg text-dark mb-2">About</p>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
             <p className="text-gray-600 leading-relaxed mt-4">
              Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut ullamcorper purus ex et massa. Suspendisse potenti. Nunc consectetur, erat non iaculis accumsan, est quam virra quam, eget comm odo vitae. Pellentesque pulvinar lorem mi, a euismod r.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
