'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const HeroBanner = () => {
  return (
    <section
      id="home"
      className="lg:mb:19 container m-auto rounded-xl border border-gray-200 bg-white p-12 md:mb-16 xl:mb-20"
    >
      <div className="grid items-start gap-10 menu:grid-cols-2 menu:items-center menu:gap-12">
        {/* Text Content */}
        <div className="mx-auto flex max-w-[60ch] flex-col text-center md:mx-0 md:text-left">
          <p className="mb-2 text-lg font-semibold text-dark">Hey, I&apos;m Brodie</p>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-dark md:text-5xl">
            I create <span className="text-primary">meaningful</span> and{' '}
            <span className="text-primary">innovative</span> solutions
          </h1>

          {/* FIX: no layout shift — absolute inside fixed height */}
          <div className="relative mb-8 h-[4.75rem] overflow-hidden md:h-[3.25rem]">
            <div className="absolute inset-0 flex items-center">
              <TypeAnimation
                sequence={[
                  'I build full-stack web applications.',
                  1000,
                  'I develop cross-platform and native mobile applications.',
                  1000,
                  'I design UI/UX systems from research to high-fidelity.',
                  1000,
                  'I turn complex problems into clean, working code.',
                  1000,
                  'I hold a Diploma in Mobile Application Design & Development.',
                  1000,
                  'I have experience in financial planning and analysis.',
                  1000,
                  'I build financial planning tools from firsthand industry experience.',
                  1000,
                ]}
                wrapper="p"
                speed={50}
                className="text-lg leading-snug text-gray-600"
                repeat={Infinity}
              />
            </div>
          </div>

          {/* Button: force natural width */}
          <Link
            href="#contact"
            className="inline-flex w-auto items-center justify-center self-center rounded-md bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-opacity-90 md:self-start"
          >
            Get In Touch
          </Link>
        </div>

        {/* Image Content */}
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
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
          <div className="absolute inset-0 z-0 translate-x-4 translate-y-4 -rotate-6 transform rounded-lg bg-primary/20"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
