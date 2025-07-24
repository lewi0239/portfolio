import {
    ChartBarIcon,
    PaintBrushIcon,
    CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { FcCellPhone } from "react-icons/fc";

const expertiseData = [
    {
        icon: ChartBarIcon,
        title: "Full-Stack Web & Mobile Development",
        description:
            "I've worked with JavaScript, TypeScript, React, Next.js, Node.js, and more.",
    },
    {
        icon: FcCellPhone,
        title: "Cross-Platform Mobile Development",
        description:
            "I've worked with React Native and Flutter to create cross-platform mobile applications.",
    },
    {
        icon: PaintBrushIcon,
        title: "UI & UX Design",
        description: "I'm presently using Figma for UI/UX design.",
    },
    {
        icon: CodeBracketIcon,
        title: "Multi-Paradigm Programming",
        description:
            "I'm comfortable with Object-Oriented Programming, Procedural Programming, and Functional Programming.",
    },
];

const Expertise = () => {
    return (
        <section id="expertise" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center md:text-left mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-dark">
                        My Expertise
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-1 gap-8">
                    {expertiseData.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="bg-light-bg p-8 rounded-lg border border-gray-200 relative overflow-hidden"
                            >
                                <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-primary"></div>
                                <div className="p-4 bg-primary/10 rounded-full inline-block mb-6">
                                    <Icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-4">
                                    {item.title}
                                </h3>
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
