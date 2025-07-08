import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Define the type for props
interface ProjectCardsProps {
  isLoading: boolean;
  data: {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    topics: string[];
  }[];
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ isLoading, data }) => {
  if (isLoading) {
    return <div className="text-center text-dark">Loading projects...</div>;
  }

  if (!data || data.length === 0) {
    return <div className="text-center text-dark">No projects to display.</div>;
  }

  const getProjectImage = (topics: string[]) => {
    const topic = topics && topics.length > 0 ? topics[0] : "default";
    switch (topic) {
      case "hackathon":
        return "/images/hackathon.svg";
      case "education":
        return "/images/education.svg";
      default:
        return "/images/placeholder.png";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((repo) => (
        <div
          key={repo.id}
          className="bg-white rounded-lg shadow-md overflow-hidden group"
        >
          <div className="relative h-60 w-full">
            <Image
              src={getProjectImage(repo.topics)}
              alt={repo.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-dark mb-2">{repo.name}</h3>
            <p className="text-gray-600 mb-4 truncate">
              {repo.description || "No description available."}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline inline-flex items-center"
            >
              View on GitHub
              <ArrowUpRightIcon className="inline-block h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
