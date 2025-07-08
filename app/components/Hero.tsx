import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section id="home" className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <p className="text-lg text-dark mb-2">Hey, I am Brodie</p>
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight mb-4">
            I create <span className="text-primary">product design</span> and brand experience
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <Link href="#contact" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
            Get In Touch
          </Link>
        </div>

        {/* Image Content */}
        <div className="relative w-full max-w-sm mx-auto md:max-w-none">
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
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
