function ComparisonSection() {
  const comparisons = [
    {
      feature: "Beginner Friendly",
      mangools: "⭐ Excellent",
      ahrefs: "👍 Good",
      semrush: "👍 Good",
    },
    {
      feature: "Ease of Use",
      mangools: "⭐ Very Easy",
      ahrefs: "⚠️ Moderate",
      semrush: "⚠️ Moderate",
    },
    {
      feature: "Keyword Research",
      mangools: "⭐ Excellent",
      ahrefs: "⭐ Excellent",
      semrush: "⭐ Excellent",
    },
    {
      feature: "Backlink Analysis",
      mangools: "⚠️ Basic",
      ahrefs: "⭐ Excellent",
      semrush: "⭐ Excellent",
    },
    {
      feature: "Competitor Research",
      mangools: "👍 Good",
      ahrefs: "⭐ Excellent",
      semrush: "⭐ Excellent",
    },
    {
      feature: "Rank Tracking",
      mangools: "✅ Good",
      ahrefs: "✅ Good",
      semrush: "✅ Good",
    },
    {
      feature: "Learning Curve",
      mangools: "⭐ Easy",
      ahrefs: "⚠️ Steep",
      semrush: "⚠️ Steep",
    },
    {
      feature: "Pricing",
      mangools: "⭐ Affordable",
      ahrefs: "❌ Expensive",
      semrush: "❌ Expensive",
    },
    {
      feature: "Best For",
      mangools: "⭐ Beginners",
      ahrefs: "SEO Professionals",
      semrush: "Agencies",
    },
  ];

  return (
    <section className="bg-slate-50 py-28 lg:py-36">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide">
            SEO Tool Comparison
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08]">
            Mangools vs Ahrefs vs Semrush
          </h2>

          <p className="mt-10 text-xl md:text-2xl leading-9 text-slate-600">
            All three tools are excellent for SEO. The best choice depends on
            your experience level, budget, and long-term goals.
          </p>

        </div>

        {/* Comparison Table */}
        <div className="mt-20 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-xl">

          <table className="w-full">

            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-6 text-left text-lg">Feature</th>
                <th className="p-6 text-left text-lg">Mangools</th>
                <th className="p-6 text-left text-lg">Ahrefs</th>
                <th className="p-6 text-left text-lg">Semrush</th>
              </tr>
            </thead>

            <tbody>

              {comparisons.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-200 hover:bg-slate-50 transition-colors duration-200"
                >

                  <td className="p-6 text-lg font-semibold text-slate-900">
                    {item.feature}
                  </td>

                  <td className="p-6 text-lg text-slate-700">
                    {item.mangools}
                  </td>

                  <td className="p-6 text-lg text-slate-700">
                    {item.ahrefs}
                  </td>

                  <td className="p-6 text-lg text-slate-700">
                    {item.semrush}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Recommendation */}
        <div className="mt-16 p-10 rounded-3xl bg-green-50 border border-green-200 shadow-lg">

          <h3 className="text-3xl font-bold text-green-800 mb-6">
            Our Recommendation
          </h3>

          <p className="text-lg leading-8 text-green-700">
            If you're just starting your SEO journey, Mangools offers one of the
            best combinations of ease of use, affordability, and practical
            keyword research features. It's an excellent choice for beginners
            who want to learn SEO without feeling overwhelmed.
          </p>

          <p className="mt-6 text-lg leading-8 text-green-700">
            As your SEO skills grow and your requirements become more advanced,
            Ahrefs and Semrush provide additional capabilities such as deeper
            backlink analysis, large-scale competitor research, and advanced
            marketing features.
          </p>

        </div>

      </div>

    </section>
  );
}

export default ComparisonSection;