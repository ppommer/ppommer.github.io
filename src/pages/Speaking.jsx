import SpeakingElement from "../components/SpeakingElement";

const dummySpeakings = [
  {
    location: "Business of Startups 2020",
    title: "Crafting a design system for a multiplanetary future",
    description:
      "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
  },
  {
    location: "Galactic Tech Expo 2021",
    title: "Engineering navigation systems for interplanetary travel",
    description:
      "At Galactic Tech Expo we unveiled our latest breakthroughs in autonomous spacecraft navigation, leveraging quantum gyroscopes to ensure precision beyond the reach of traditional GPS technology.",
  },
  {
    location: "Mars Habitat Conference 2022",
    title: "Designing human experiences on the Red Planet",
    description:
      "From communication delays to extreme environments, this session examined how resilient software and hardware systems can support the next wave of lunar colonists.",
  },
  {
    location: "Lunar Innovation Summit 2023",
    title: "Building resilient systems for off-world living",
    description:
      "This talk explored how architecture, psychology, and engineering intersect in the creation of sustainable habitats for long-term life on Mars.",
  },
];

function Speaking() {
  return (
    <div className="px-4 md:px-14 lg:px-28 overflow-hidden">
      <div className="lg:w-[70%] mb-20">
        <h1 className="text-5xl font-bold mb-8 text-zinc-800 dark:text-zinc-100">
          I’ve spoken at events all around the world and been interviewed for
          many podcasts.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          One of my favorite ways to share my ideas is live on stage, where
          there’s so much more communication bandwidth than there is in writing,
          and I love podcast interviews because they give me the opportunity to
          answer questions instead of just present my opinions.
        </p>
      </div>
      <div className="space-y-16 mb-16">
        <div className="grid max-w-3xl grid-cols-1 gap-y-8 items-baseline md:grid-cols-4 ">
          <h2 className="text-sm w-[20rem] font-semibold text-zinc-800 dark:text-zinc-100">
            Conferences
          </h2>
          <div className="md:col-span-3">
            <div className="space-y-16">
              {dummySpeakings.slice(0, 2).map((el) => (
                <SpeakingElement {...el} isConf />
              ))}
            </div>
          </div>
        </div>
        <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
          <h2 className="text-sm w-[20rem] font-semibold text-zinc-800 dark:text-zinc-100">
            Podcasts
          </h2>
          <div className="md:col-span-3">
            <div className="space-y-16">
              {dummySpeakings.slice(2, 4).map((el) => (
                <SpeakingElement {...el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speaking;
