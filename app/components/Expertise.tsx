import {
  ChartBarIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';

const expertiseData = [
  {
    icon: ChartBarIcon,
    title: 'Full-Stack Web & Mobile Development',
    description:
      'Full-stack developer with experience in JavaScript, TypeScript, React, React Native, Next.js, Node.js, and MongoDB. Builds cross-platform web and mobile applications with a solid foundation in HTML5, CSS3, and Tailwind CSS.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Cross-Platform Mobile Development & Native Development',
    description:
      'I build cross-platform mobile applications with React Native and Flutter, and I also have experience developing fully native apps with Swift and Kotlin.',
  },
  {
    icon: PaintBrushIcon,
    title: 'UI & UX Design',
    description:
      'Designs full-scope design systems in Figma and Adobe Suite, covering UI/UX research, typography, colour, grids, components, and mid/high-fidelity prototypes. Experience presenting concepts to stakeholders and iterating based on feedback.',
  },
  {
    icon: CodeBracketIcon,
    title: 'Multi-Paradigm Programming',
    description:
      'Works across object-oriented, procedural, and functional programming paradigms. Approaches new technologies, languages, and frameworks with a practical learn-by-doing mindset.',
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="border border-border bg-white py-8 md:py-18 xl:mt-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <p className="mb-1 text-sm text-muted">// expertise</p>
          <h2 className="text-2xl font-bold text-dark md:text-4xl">My Expertise</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {expertiseData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative overflow-hidden border border-border bg-light-bg p-8 transition-colors hover:border-primary"
              >
                <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-primary"></div>
                <div className="mb-6 inline-block bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-md mb-4 font-bold text-dark">{item.title}</h3>
                <p className="text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
