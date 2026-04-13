import React from 'react';
import Image from 'next/image';
import {
  ArrowUpRightIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import useEmblaCarousel from 'embla-carousel-react';

type NormalizedProject = {
  id: string | number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  image: string;
};

interface ProjectCardsProps {
  isLoading: boolean;
  data: NormalizedProject[];
}

function CardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col overflow-hidden border border-border">
      <div className="aspect-[3/2] w-full bg-grv-bg2" />
      <div className="flex flex-1 flex-col gap-2 bg-light-bg p-3">
        <div className="h-5 w-3/4 bg-grv-bg2" />
        <div className="h-4 bg-grv-bg2" />
        <div className="h-4 w-5/6 bg-grv-bg2" />
        <div className="mt-4 h-4 w-1/3 bg-grv-bg2" />
      </div>
    </div>
  );
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ isLoading, data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  if (isLoading) {
    return (
      <div className="grid w-full grid-cols-1 gap-6 bg-white p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (!data || data.length === 0) {
    return <div className="text-center text-muted">{'>'} no projects to display.</div>;
  }

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden bg-white p-8">
        <div className="flex gap-6">
          {data.map((project) => {
            const topics = project.topics?.length ? project.topics.join(', ') : 'uncategorized';
            const isFigma = project.topics?.[0] === 'figma';

            return (
              <div key={project.id} className="flex-[0_0_320px]">
                <div className="flex h-full flex-col overflow-hidden border border-border bg-light-bg transition-colors hover:border-primary">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                    sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  />

                  <div className="flex flex-1 flex-col p-3">
                    <h3 className="text-md break-words font-bold leading-snug text-dark">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-sm text-muted">
                      {project.description || 'no description available.'}
                    </p>

                    <div className="mt-auto flex flex-col pt-4">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} on ${isFigma ? 'Figma' : 'GitHub'}`}
                        className="inline-flex items-center text-sm text-accent hover:underline"
                      >
                        {'>'} {isFigma ? 'view on figma' : 'view on github'}
                        <ArrowUpRightIcon className="ml-1 h-3 w-3" />
                      </a>
                      <p className="mt-2 text-xs text-muted opacity-75">{topics}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous projects"
          className="border border-border bg-white p-2 text-dark transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowLongLeftIcon className="h-8 w-8" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next projects"
          className="border border-border bg-white p-2 text-dark transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowLongRightIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCards;
