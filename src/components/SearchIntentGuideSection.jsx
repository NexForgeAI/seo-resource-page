function SearchIntentGuideSection() {
  const intents = [
    {
      title: "Informational",
      keyword: "What is keyword research?",
      description:
        "The user wants to learn something or find information.",
    },
    {
      title: "Commercial",
      keyword: "Best SEO tools for beginners",
      description:
        "The user is comparing options before making a decision.",
    },
    {
      title: "Transactional",
      keyword: "Buy Mangools subscription",
      description:
        "The user is ready to take action or make a purchase.",
    },
    {
      title: "Navigational",
      keyword: "Mangools login",
      description:
        "The user wants to visit a specific website or page.",
    },
  ];

  return (
    <section className="bg-slate-50 py-28 lg:py-36">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold tracking-wide">
            Search Intent Guide
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08]">
            Understand What The Searcher Really Wants
          </h2>

          <p className="mt-10 text-xl md:text-2xl leading-9 text-slate-600 max-w-3xl mx-auto">
            Search intent is the reason behind a search query.
            Matching intent helps Google understand that your
            content is the right answer for the user.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {intents.map((intent, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-3xl font-bold text-slate-900 mb-5">
                {intent.title}
              </h3>

              <p className="text-lg leading-8 text-slate-600 mb-8">
                {intent.description}
              </p>

              <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">

                <p className="font-semibold text-slate-900 mb-3">
                  Example Keyword:
                </p>

                <p className="text-lg text-slate-700 font-medium">
                  {intent.keyword}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default SearchIntentGuideSection;