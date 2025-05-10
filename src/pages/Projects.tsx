import { useState } from "react";
import portfolio_project from "../assets/portfolio-project.png";
import github from "../assets/icons/github.svg";
import chat_ui from "../assets/project-chat-ui.jpeg";
import lingy from "../assets/lingy-project.png";
import onbir_gym from "../assets/onbir-gym.png";
import onbir_guide from "../assets/onbir-guide.png";
import onbir_gym_website from "../assets/onbir-gym-website.png";
import figma from "../assets/icons/figma.png";

//91-truncate metni tek satira sigdirir unutma

function Projects() {
  type Project = {
    title: string;
    description: string;
    image: string;
    githubUrl?: string | false;
    figmaUrl?: string | false;
    customUrl?: string | false;
    status?: string;
  };

  const myProjects: Project[] = [
    {
      title: "My Portfolio",
      description: "Dev portfolio that showcases my projects and skills.",
      image: portfolio_project,
      githubUrl: "https://github.com/metehankrts/portfolio",
      customUrl: "https://github.com/metehankrts/portfolio",
      status: "Done",
    },
    {
      title: "Chat UI",
      description: "Whatsapp and Telegram like chat UI built with React-Native.",
      image: chat_ui,
      githubUrl: "https://github.com/metehankrts/chat-ui-app",
      customUrl: "https://github.com/metehankrts/chat-ui-app",
      figmaUrl: "https://www.figma.com/design/ZpLuiZzxpsioeRZHYXMRKA/Chat-App?m=auto&t=5DCYmzhapduo9DnM-6",
      status: "Done",
    },
    {
      title: "Lingy",
      description: "A language learning app that helps you learn a new language by flipping cards.",
      image: lingy,
      githubUrl: "https://github.com/metehankrts/fliplang-app",
      customUrl: "https://github.com/metehankrts/fliplang-app",
      figmaUrl: "https://www.figma.com/design/Rz6Mq5jNhDtPMVqlF1p8hX/Lingy?m=auto&t=5DCYmzhapduo9DnM-6",
      status: "Done",
    },
    {
      title: "Onbir-Gym",
      description: "3D Gym App built with React-Native and Supabase.",
      image: onbir_gym,
      githubUrl: "https://github.com/metehankrts/fitness-ui-app",
      customUrl: "https://github.com/metehankrts/fitness-ui-app",
      figmaUrl: "https://www.figma.com/design/7874PK5abQI771enIkH9vT/Onbir-Gym?m=auto&t=5DCYmzhapduo9DnM-6",
      status: "Waiting for Google Play Approval",
    },
    {
      title: "Onbir-Gym Website",
      description: "Website Version of Onbir-Gym app that built with React.js.",
      image: onbir_gym_website,
      githubUrl: false,
      customUrl: "not-ready",
      figmaUrl: false,
      status: "Last Revisions",
    },
    {
      title: "Onbir-Guide",
      description: "A guide app that helps you find the best places to visit in selected city.",
      image: onbir_guide,
      githubUrl: false,
      customUrl: "not-ready",
      figmaUrl: false,
      status: "Last Revisions",
    },
  ];

  return (
    <div className="mx-auto">
      <h2 className="font-semibold text-3xl mb-10 text-black">My Projects</h2>

      <div className="grid grid-cols-1 gap-8">
        {myProjects.map((project, index) => {
          const [hidden, setHidden] = useState(false);
          return (
            <div key={index}>
              <div className="relative overflow-hidden bg-white rounded-t-xl">
                <div className="flex flex-wrap items-center gap-2 h-12 px-4 bg-gray-200 justify-between sm:gap-0">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setHidden(false)}
                      className="w-3 h-3 bg-green-400 rounded-full"
                      aria-label="Show All"
                    ></button>
                    <button
                      onClick={() => setHidden(true)}
                      className="w-3 h-3 bg-yellow-400 rounded-full"
                    ></button>
                    <button className="w-3 h-3 bg-red-400 rounded-full"></button>
                  </div>

                  <div className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-xs truncate max-w-[60%] sm:max-w-full">
                    {project.customUrl}
                  </div>
                </div>

                {!hidden && (
                  <div className="relative overflow-hidden transition-all duration-250 rounded-b-xl group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 sm:h-72 md:h-96 object-cover object-top transform transform-all duration-200 ease-in-out scale-[0.95] origin-bottom group-hover:scale-100 rounded-xl group-hover:rounded-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                )}

                <div className="mt-4 flex flex-col gap-2">
                  <h3 className="font-semibold text-xl sm:text-2xl text-black">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-3">
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 h-10 p-4 transition-colors shadow-sm ${
                          !project.githubUrl
                            ? "pointer-events-none opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <img
                          src={github}
                          alt="GitHub Logo"
                          className="w-6 h-6 sm:w-4 sm:h-4 mr-2"
                        />
                        <span className="text-sm sm:text-xs text-gray-800">
                          GitHub
                        </span>
                      </a>

                      <a
                        href={project.figmaUrl || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 h-10 p-4 transition-colors shadow-sm ${
                          !project.figmaUrl
                            ? "pointer-events-none opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <img
                          src={figma}
                          alt="Figma Logo"
                          className="w-6 h-6 sm:w-4 sm:h-4 mr-2"
                        />
                        <span className="text-sm sm:text-xs text-gray-800">
                          Figma
                        </span>
                      </a>
                    </div>

                    {project.status && (
                      <div className="inline-flex items-center justify-center rounded-md bg-black hover:bg-white h-10 px-4 py-2 transition-colors shadow-sm text-white hover:text-black">
                        <span className="text-sm font-medium">
                          # {project.status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
