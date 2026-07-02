function ExamplesSection() {
  const examples = [
    {
      bad: "Shoes",
      good: "Best running shoes for beginners",
    },
    {
      bad: "Laptop",
      good: "Best laptop for civil engineering students",
    },
    {
      bad: "Fitness",
      good: "Home workout plan for weight loss",
    },
    {
      bad: "SEO",
      good: "How to find low competition keywords",
    },
  ];

  return (
    <section className="bg-slate-50 py-28 lg:py-36">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
            Real Examples
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08]">
            Good Keywords Beat Generic Keywords
          </h2>

          <p className="mt-10 text-xl md:text-2xl leading-9 text-slate-600 max-w-3xl mx-auto">
            Most beginners target broad keywords that are impossible
            to rank for. Here are examples of how specific keywords
            create better SEO opportunities.
          </p>

        </div>

        {/* Comparison Table */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

          {/* Header */}
          <div className="grid grid-cols-2 bg-slate-900 text-white font-semibold text-lg">

            <div className="p-6 border-r border-slate-700">
              Generic Keyword ❌
            </div>

            <div className="p-6">
              Better Keyword ✅
            </div>

          </div>

          {/* Rows */}
          {examples.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-t border-slate-200 hover:bg-slate-50 transition-colors duration-300"
            >

              <div className="p-6 bg-red-50 text-red-700 font-semibold text-lg">
                {item.bad}
              </div>

              <div className="p-6 bg-green-50 text-green-700 font-semibold text-lg">
                {item.good}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ExamplesSection;