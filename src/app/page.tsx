import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ProjectPage from "@/pages/project";

export default function Posts() {
  return (
    <div className="transition text-center bg-slate-400 scroll-smooth">
      <div className="m-96" id="home">
      <HomePage />
      </div>
      <div className="m-96" id="about">
      <AboutPage />
      </div>
      <div className="m-96" id="projects">
      <ProjectPage />
      </div>
    </div>
  );
}
