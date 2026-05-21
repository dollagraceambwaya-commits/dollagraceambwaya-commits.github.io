const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 pt-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <p className="text-teal-400 font-medium mb-4 tracking-widest uppercase text-sm">
          Hi there, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Dolla Grace{" "}
          <span className="bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent">
            Ambwaya
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-6">
          Full Stack Developer & Digital Marketer
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          Building modern digital experiences — I code, market, and brand all at
          once. Lifestyle, but make it worth it.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg shadow-violet-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-gray-700 text-gray-300 px-8 py-3 rounded-full font-medium hover:border-teal-400 hover:text-teal-400 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
