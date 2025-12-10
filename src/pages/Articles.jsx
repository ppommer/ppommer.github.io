import ArticlesElement from "../components/ArticlesElement";

const dummyArticles = [
  {
    title: "Crafting a design system for a multiplanetary future",
    description:
      "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
    isoDate: "2022-08-19T21:15:30.000Z",
  },
  {
    title: "Engineering navigation systems for interplanetary travel",
    description:
      "Building reliable navigation for spacecraft requires precision beyond Earth's standards. Our team developed quantum gyroscopes that ensure accuracy even when GPS signals are billions of kilometers away.",
    isoDate: "2022-07-14T16:30:15.000Z",
  },
  {
    title: "Terraforming Mars: The design challenges of a new world",
    description:
      "Transforming the red planet into a habitable environment isn’t just a scientific endeavor—it’s a design revolution. We explore how architecture, technology, and ethics converge in humanity’s greatest experiment.",
    isoDate: "2022-01-03T09:42:00.000Z",
  },
];

function Articles() {
  return (
    <div className="px-4 md:px-8 lg:px-28 overflow-hidden">
      <div className="lg:w-[70%] mb-20">
        <h1 className="text-5xl text-zinc-800 dark:text-zinc-100 font-bold mb-8">
          Writing on software design, company building, and the aerospace
          industry.
        </h1>
        <p className="dark:text-gray-400 text-zinc-600">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </div>
      <ul className="md:border-l border-zinc-100 dark:border-zinc-700/40 mb-24 flex flex-col gap-y-14 md:gap-y-10 ">
        {dummyArticles.map((el) => (
          <ArticlesElement {...el} />
        ))}
      </ul>
    </div>
  );
}

export default Articles;
