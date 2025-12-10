import ProjectElement from "../components/ProjectElement";
import PlanetariaIcon from "../assets/cv-icons/planetaria.ecd81ade.svg";
import AnimaginaryIcon from "../assets/cv-icons/animaginary.8d221e52.svg";
import HelioSteamIcon from "../assets/cv-icons/helio-stream.2ac8d11f.svg";
import CosmOsIcon from "../assets/cv-icons/cosmos.c70b0295.svg";
import OpenShuttleIcon from "../assets/cv-icons/open-shuttle.db0327e4.svg";

function Projects() {
  return (
    <div className="px-4 md:px-8 lg:px-28 overflow-hidden">
      <div className="flex flex-col lg:w-[70%] mb-20">
        <h1 className="text-5xl font-bold mb-8">
          Things I’ve made trying to put my dent in the universe. industry.
        </h1>
        <p className="text-gray-400 ">
          I’ve worked on tons of little projects over the years but these are
          the ones that I’m most proud of. Many of them are open-source, so if
          you see something that piques your interest, check out the code and
          contribute if you have ideas for how it can be improved.
        </p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-16">
        <ProjectElement
          svgIcon={PlanetariaIcon}
          title="Planetaria"
          description="Creating technology to empower civilians to explore space on their own terms."
          url="planetaria.tech"
        />
        <ProjectElement
          svgIcon={AnimaginaryIcon}
          title="Animaginary"
          description="High performance web animation library, hand-written in optimized WASM."
          url="github.com"
        />
        <ProjectElement
          svgIcon={HelioSteamIcon}
          title="HelioStream"
          description="Real-time video streaming library, optimized for interstellar transmission."
          url="heliostream.net"
        />

        <ProjectElement
          svgIcon={CosmOsIcon}
          title="cosmOS"
          description="The operating system that powers our Planetaria space shuttles."
          url="cosmos.com"
        />
        <ProjectElement
          svgIcon={OpenShuttleIcon}
          title="OpenShuttle"
          description="The schematics for the first rocket I designed that successfully made it to orbit."
          url="openshuttle.com"
        />
      </div>
    </div>
  );
}

export default Projects;
