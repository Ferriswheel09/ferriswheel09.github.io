import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ProjectPage from "@/pages/project";

export default function Posts() {
  return (
    <div className="transition text-center scroll-smooth">
      <div className="mb-96" id="home">
      <HomePage />
      </div>
      <div className="mb-96" id="about">
      <AboutPage />
      </div>
      <div className="mb-96" id="projects">
      <ProjectPage />
      </div>
    </div>
  );
}
