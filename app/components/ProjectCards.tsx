import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

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

const ProjectCards: React.FC<ProjectCardsProps> = ({ isLoading, data }) => {
    if (isLoading) {
        return <div className="text-center text-dark">Loading projects...</div>;
    }
    if (!data || data.length === 0) {
        return <div className="text-center text-dark">No projects to display.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((project) => {
                const topics =
                    project.topics && project.topics.length > 0
                        ? project.topics.join(", ")
                        : "Uncategorized";

                const isFigma = project.topics?.[0] === "figma";

                return (
                    <div
                        key={project.id}
                        className="flex flex-col h-full rounded-xl bg-white shadow-md overflow-hidden"
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 25vw"
                                className="object-cover"
                            />
                        </div>

                        {/* Body */}
                        <div className="flex flex-col flex-1 p-6">
                            <h3 className="text-xl font-bold text-dark">{project.name}</h3>

                            <p className="mt-2 text-gray-600 ">
                                {project.description || "No description available."}
                            </p>

                            {/* Footer sticks to bottom across all cards */}
                            <div className="flex-col mt-auto pt-4 flex justify-between">
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline inline-flex text-sm mb-2"
                                >
                                    {isFigma ? "View on Figma" : "View on GitHub"}
                                    <ArrowUpRightIcon className="h-3 w-3" />
                                </a>

                                <p className="text-sm opacity-75 mt-2">{topics}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectCards;
