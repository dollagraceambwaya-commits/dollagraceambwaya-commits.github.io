type Project = {
  title: string;
  role: string;
  description: string;
  tags: string[];
  link: string;
  comingSoon: boolean;
};

const projects: Project[] = [
  {
    title: "SkillSync",
    role: "In Development — Solo Project",
    description:
      "A modern community-driven web platform connecting learners, developers, and creators through opportunities, collaboration, and skill-based growth.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    link: "#",
    comingSoon: true,
  },
  {
    title: "Orphanage Finance Management System",
    role: "Expenses Module",
    description:
      "Built the Expenses module — ExpenseForm, ExpenseList, and Balance calculation. Connected to MongoDB backend via REST API.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/lucywachu77-dev/orphanage-finance-management-system",
    comingSoon: false,
  },
  {
    title: "Finance Tracker",
    role: "Income Module",
    description:
      "Built the Income module — IncomeForm and IncomeList components. Integrated with Express backend API and wired into App.jsx.",
    tags: ["React", "Vite", "JavaScript", "REST API"],
    link: "https://github.com/lucywachu77-dev/finance-tracker-week-12",
    comingSoon: false,
  },
  {
    title: "DOM Manipulation — Week 5",
    role: "Solo Project",
    description:
      "Built a To-Do app with add, delete, edit, filter and active task count features using JavaScript DOM manipulation.",
    tags: ["JavaScript", "DOM", "CSS", "HTML"],
    link: "https://github.com/dollagraceambwaya-commits/iyf-s10-week-05-dollagraceambwaya-commits",
    comingSoon: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-teal-500 mb-10 rounded-full"></div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project: Project) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-violet-500/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-teal-400 font-medium uppercase tracking-widest">
                  {project.role}
                </span>
                {project.comingSoon && (
                  <span className="text-xs bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full border border-violet-500/30">
                    Coming Soon
                  </span>
                )}
              </div>
              <h3 className="font-bold text-white text-lg mb-3 group-hover:text-violet-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-violet-500/10 text-violet-400 text-xs px-3 py-1 rounded-full border border-violet-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {!project.comingSoon && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-teal-400 font-medium text-sm hover:text-teal-300 transition-colors"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
