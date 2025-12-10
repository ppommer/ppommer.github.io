import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground({ id = "tsparticles", className = "" }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <div 
      className={`absolute inset-0 w-full h-full z-0 ${className}`}
      style={{ minHeight: '100vh' }}
    >
      <Particles
        id={id}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#71717a", // zinc-500
            },
            links: {
              color: "#71717a",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.8,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.3,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 3, max: 5 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 2,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default ParticlesBackground;
