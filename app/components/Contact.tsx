const links = [
  {
    label: "GitHub",
    href: "https://github.com/dollagraceambwaya-commits",
    icon: "🐙",
    description: "Check out my code",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dolla-grace",
    icon: "💼",
    description: "Connect professionally",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/dollagrace",
    icon: "📸",
    description: "Follow my journey",
  },
  {
    label: "Email",
    href: "mailto:dollagraceambwaya@gmail.com",
    icon: "✉️",
    description: "Send me a message",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Contact Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-teal-500 mb-10 rounded-full mx-auto"></div>
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          I&apos;m open to opportunities, collaborations, and conversations.
          Let&apos;s build something great together.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              className="bg-gray-950 rounded-2xl p-6 border border-gray-800 hover:border-teal-500/50 transition-all group"
            >
              <div className="text-3xl mb-3">{link.icon}</div>
              <h3 className="font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">
                {link.label}
              </h3>
              <p className="text-gray-500 text-sm">{link.description}</p>
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-sm">
          &quot;Lifestyle, but make it worth it.&quot; — Dolla Grace Ambwaya
        </p>
      </div>
    </section>
  );
};

export default Contact;
