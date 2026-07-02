function CompetitionAnalysisSection() {
  const checks = [
    {
      title: "Search The Keyword",
      description:
        "Type your keyword into Google and study the first page results.",
    },
    {
      title: "Look For Small Websites",
      description:
        "If independent blogs rank, you may have a realistic chance too.",
    },
    {
      title: "Avoid Giant Brands",
      description:
        "Be careful when results are dominated by major authority websites.",
    },
    {
      title: "Check Content Quality",
      description:
        "Weak or outdated content creates opportunities for better content.",
    },
    {
      title: "Find Ranking Opportunities",
      description:
        "Choose keywords where you can realistically provide a better answer.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-28 lg:py-36">

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold tracking-wide">
          Competition Analysis
        </span>

        <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08]">
          Don't Fight Battles You Can't Win
        </h2>

        <p className="mt-10 text-xl md:text-2xl leading-9 text-slate-600 max-w-3xl mx-auto">
          Before targeting a keyword, analyze the competition.
          The goal is not to find the biggest keyword —
          it's to find keywords you can actually rank for.
        </p>

      </div>

      {/* Cards */}
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {checks.map((item, index) => (
          <div
            key={index}
            className="p-10 rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >

            <div className="w-14 h-14 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xl font-bold mb-6">
              {index + 1}
            </div>

            <h3 className="text-3xl font-bold text-slate-900 mb-5">
              {item.title}
            </h3>

            <p className="text-lg leading-8 text-slate-600">
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CompetitionAnalysisSection;