import { ChartBarIcon, PencilSquareIcon, PaintBrushIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const expertiseData = [
  {
    icon: ChartBarIcon,
    title: 'Strategy & Direction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    icon: PencilSquareIcon,
    title: 'Branding & Logo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    icon: PaintBrushIcon,
    title: 'UI & UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    icon: CodeBracketIcon,
    title: 'Webflow Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center md:text-left mb-12">
          <p className="text-lg text-dark mb-2">My Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark">My Expertise</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-light-bg p-8 rounded-lg border border-gray-200 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-primary"></div>
                <div className="p-4 bg-primary/10 rounded-full inline-block mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
