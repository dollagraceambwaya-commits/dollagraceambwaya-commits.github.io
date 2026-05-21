const skills = [
  {
    category: "Frontend",
    icon: "🖥️",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: ["Git", "GitHub", "Vite", "VS Code", "npm"],
  },
  {
    category: "Marketing",
    icon: "📣",
    items: [
      "Digital Marketing",
      "Content Creation",
      "Google Analytics",
      "Branding",
      "Instagram",
      "TikTok",
      "LinkedIn",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-teal-500 mb-10 rounded-full"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-gray-950 rounded-2xl p-6 border border-gray-800 hover:border-violet-500/50 transition-colors group"
            >
              <div className="text-2xl mb-3">{skill.icon}</div>
              <h3 className="font-bold text-violet-400 mb-4 group-hover:text-teal-400 transition-colors">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-900 text-gray-400 text-xs px-3 py-1 rounded-full border border-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
