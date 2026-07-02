function KeywordGuideSection() {
  const steps = [
    {
      step: "Step 1",
      title: "Choose A Broad Topic",
      description:
        "Start with a topic related to your niche, product, or audience.",
      example: "Example: Running Shoes",
    },
    {
      step: "Step 2",
      title: "Make It More Specific",
      description:
        "Turn broad topics into long-tail keywords with clear intent.",
      example: "Example: Best running shoes for beginners",
    },
    {
      step: "Step 3",
      title: "Understand Search Intent",
      description:
        "Ask what the user actually wants when typing the keyword.",
      example: "Example: Buying advice, information, or comparison",
    },
    {
      step: "Step 4",
      title: "Avoid Heavy Competition",
      description:
        "Look for keywords where smaller websites still have a chance to rank.",
      example: "Example: Low competition opportunities",
    },
    {
      step: "Step 5",
      title: "Create Helpful Content",
      description:
        "Build content that directly answers the user's search query.",
      example: "Example: Detailed beginner guides",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-28 lg:py-36">

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold tracking-wide">
          Keyword Research Guide
        </span>

        <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08]">
          A Simple 5-Step Keyword Research Process
        </h2>

        <p className="mt-10 text-xl md:text-2xl leading-9 text-slate-600 max-w-3xl mx-auto">
          Follow this beginner-friendly process to find keywords that
          are easier to rank for and more likely to generate traffic.
        </p>

      </div>

      {/* Cards */}
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {steps.map((item, index) => (
          <div
            key={index}
            className="p-10 rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >

            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
              {item.step}
            </span>

            <h3 className="text-3xl font-bold text-slate-900 mb-5">
              {item.title}
            </h3>

            <p className="text-lg leading-8 text-slate-600 mb-8">
              {item.description}
            </p>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">

              <p className="text-base font-medium text-slate-700">
                {item.example}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default KeywordGuideSection;
