function LearningSection() {
  return (
    <section
      id="guide"
      className="max-w-7xl mx-auto px-6 py-28 lg:py-36"
    >
      <div className="max-w-5xl mx-auto text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide">
          SEO Fundamentals
        </span>

        <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08]">
          Learn The Two Concepts That Drive SEO Success
        </h2>

        <p className="mt-10 text-xl md:text-2xl leading-9 text-slate-600 max-w-3xl mx-auto">
          Before using any keyword tool, you must understand keywords
          and search intent. These two concepts determine whether
          your content gets traffic or stays invisible.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-20">

        {/* Keyword Card */}
        <div className="p-10 rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <h3 className="text-3xl font-bold text-slate-900 mb-5">
            What Is A Keyword?
          </h3>

          <p className="text-lg leading-8 text-slate-600 mb-8">
            A keyword is the phrase people type into Google when
            searching for information, products, or services.
          </p>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">

            <p className="font-semibold text-slate-900 mb-3">
              Example:
            </p>

            <p className="text-lg text-slate-700 font-medium">
              "best running shoes for beginners"
            </p>

          </div>

        </div>

        {/* Search Intent Card */}
        <div className="p-10 rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <h3 className="text-3xl font-bold text-slate-900 mb-5">
            What Is Search Intent?
          </h3>

          <p className="text-lg leading-8 text-slate-600 mb-8">
            Search intent is the reason behind a search.
            Understanding intent helps you create content
            that matches what users actually want.
          </p>

          <div className="space-y-4">

            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl font-medium">
              📚 Informational
            </div>

            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl font-medium">
              🔍 Commercial
            </div>

            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl font-medium">
              🛒 Transactional
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LearningSection;