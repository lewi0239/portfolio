import { Suspense } from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import HeroBanner from './components/Hero';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';

function ExpertiseSkeleton() {
  return (
    <section className="w-full animate-pulse border border-border bg-white py-8">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="h-9 w-40 bg-grv-bg2" />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="border border-border bg-light-bg p-8">
              <div className="mb-6 h-16 w-16 bg-grv-bg2" />
              <div className="mb-4 h-5 w-2/3 bg-grv-bg2" />
              <div className="flex flex-col gap-2">
                <div className="h-4 bg-grv-bg2" />
                <div className="h-4 bg-grv-bg2" />
                <div className="h-4 w-4/5 bg-grv-bg2" />
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
    <section className="w-full animate-pulse border border-border bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-8 h-9 w-48 bg-grv-bg2" />
        <div className="mb-8 flex justify-center gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-9 w-16 border border-border bg-grv-bg2" />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-12 p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col overflow-hidden border border-border">
              <div className="aspect-[3/2] w-full bg-grv-bg2" />
              <div className="flex flex-1 flex-col gap-2 bg-light-bg p-3">
                <div className="h-5 w-3/4 bg-grv-bg2" />
                <div className="h-4 bg-grv-bg2" />
                <div className="h-4 w-5/6 bg-grv-bg2" />
                <div className="mt-4 h-4 w-1/3 bg-grv-bg2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const profileImage = '/images/profile.jpg';

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
