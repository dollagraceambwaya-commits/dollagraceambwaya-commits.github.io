const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-teal-500 mb-10"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              I&apos;m Dolla Grace Ambwaya — a Full Stack Developer and Digital
              Marketer based in Nairobi, Kenya. I build web applications and
              craft digital experiences that connect people with purpose.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Trained at IYF Weekend Academy, I&apos;ve built projects ranging
              from finance trackers to orphanage management systems, always
              combining clean code with thoughtful design.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My tagline?{" "}
              <span className="text-violet-400 font-medium">
                &quot;Lifestyle, but make it worth it.&quot;
              </span>{" "}
              — blending personal growth with tech skills and digital
              storytelling.
            </p>
          </div>
          <div className="bg-gray-950 rounded-2xl p-8 border border-gray-800">
            <div className="space-y-5">
              {[
                { label: "Location", value: "Nairobi, Kenya" },
                { label: "Academy", value: "IYF Weekend Academy" },
                { label: "Focus", value: "Full Stack + Marketing" },
                {
                  label: "Available",
                  value: "Open to opportunities",
                  highlight: true,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between border-b border-gray-800 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-gray-500">{item.label}</span>
                  <span
                    className={
                      item.highlight
                        ? "text-teal-400 font-medium"
                        : "text-white font-medium"
                    }
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
