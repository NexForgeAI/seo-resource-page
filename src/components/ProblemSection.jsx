function ProblemSection() {
  return (
    <section className="bg-slate-50 py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold tracking-wide mb-8">
            The Real Problem
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08]">
            Most Websites Don't Fail
            <br />
            Because of Bad Content
          </h2>

          <h3 className="mt-8 text-2xl md:text-3xl font-semibold text-slate-700 leading-relaxed">
            They Fail Because They Never Validate Demand
          </h3>

          <p className="mt-10 text-xl leading-9 text-slate-600 max-w-3xl mx-auto">
            Many website owners spend weeks writing articles,
            building pages, and publishing content only to
            realize that nobody is searching for those topics.
          </p>

          <p className="mt-6 text-xl leading-9 text-slate-600 max-w-3xl mx-auto">
            Without keyword research, even excellent content
            can stay buried on page ten of Google where
            almost nobody will ever find it.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="p-10 rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <h4 className="text-2xl font-bold text-slate-900 mb-4">
              Targeting the Wrong Keywords
            </h4>

            <p className="text-lg leading-8 text-slate-600">
              Writing about topics nobody is actively searching for.
            </p>

          </div>

          <div className="p-10 rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <h4 className="text-2xl font-bold text-slate-900 mb-4">
              Ignoring Search Intent
            </h4>

            <p className="text-lg leading-8 text-slate-600">
              Creating content that doesn't match what users expect.
            </p>

          </div>

          <div className="p-10 rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <h4 className="text-2xl font-bold text-slate-900 mb-4">
              Competing Against Giants
            </h4>

            <p className="text-lg leading-8 text-slate-600">
              Trying to rank for keywords dominated by large authority websites.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProblemSection;