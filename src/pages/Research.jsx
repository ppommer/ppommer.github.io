import ParticlesBackground from "../components/ParticlesBackground";

function Research() {
  return (
    <div className="relative px-4 md:px-14 lg:px-28 overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground id="tsparticles-research" />
      
      {/* Content */}
      <div className="relative z-10 lg:w-[70%] mb-20">
        <h1 className="text-5xl font-bold mb-8 text-zinc-800 dark:text-zinc-100">
          Coming soon!
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
            Work I've published and research projects I'm working on will appear here.
        </p>
      </div>
    </div>
  );
}

export default Research;
