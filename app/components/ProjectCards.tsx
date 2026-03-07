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

function CardSkeleton() {
    return (
        <div className="flex flex-col overflow-hidden border border-slate-50 rounded-xl shadow-md animate-pulse">
            <div className="w-full aspect-[3/2] bg-gray-200 rounded-t-xl" />
            <div className="flex flex-col flex-1 p-3 bg-white gap-2">
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
                <div className="h-4 w-1/3 bg-gray-200 rounded mt-4" />
            </div>
        </div>
    );
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ isLoading, data }) => {
    if (isLoading) {
        return (
            <div className="bg-white rounded-xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 p-8">
                {[...Array(4)].map((_, i) => <CardSkeleton key={i} />)}
            </div>
        );
    }
    if (!data || data.length === 0) {
        return <div className="text-center text-dark">No projects to display.</div>;
    }

    return (
        <div className="bg-white rounded-xl w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 p-8">
            {data.map((project) => {
                const topics = project.topics?.length ? project.topics.join(", ") : "Uncategorized";
                const isFigma = project.topics?.[0] === "figma";

                return (
                    <div
                        key={project.id}
                        className="flex flex-col h-full w-50 overflow-hidden border border-slate-50 rounded-xl shadow-md hover:shadow-lg"
                    >
                        {/* Image (no wrapper needed since we're not using 'fill') */}
                        <Image
                            src={project.image}
                            alt={project.name}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover rounded-t-xl"
                            sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                        />

                        {/* Body */}
                        <div className="flex flex-col flex-1 p-3 bg-white">
                            <h3 className="text-md font-bold text-dark break-words leading-snug">
                                {project.name}
                            </h3>

                            <p className="text-sm mt-2 text-gray-600">
                                {project.description || "No description available."}
                            </p>

                            <div className="mt-auto pt-4 flex flex-col">
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.name} on ${isFigma ? "Figma" : "GitHub"}`}
                                    className="text-blue-500 hover:underline inline-flex items-center text-sm"
                                >
                                    {isFigma ? "View on Figma" : "View on GitHub"}
                                    <ArrowUpRightIcon className="h-3 w-3 ml-1" />
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
