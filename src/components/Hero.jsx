function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 lg:py-40">
      <div className="max-w-5xl mx-auto text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide mb-8">
          Beginner-Friendly SEO Guide
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
          Learn Keyword Research
          <br />
          That Actually Gets Traffic
        </h1>

        <p className="mt-10 text-xl md:text-2xl leading-9 text-slate-600 max-w-3xl mx-auto">
          Learn how to find low-competition keywords,
          understand search intent, and create content
          that people are actually searching for.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">

          {/* Start Learning */}

          <a
            href="#guide"
            className="px-9 py-4 rounded-xl bg-slate-900 text-white font-semibold shadow-lg hover:bg-slate-800 hover:scale-105 transition-all duration-300 inline-block"
          >
            Start Learning
          </a>

          {/* Try Mangools */}

          <a
            href="https://mangools.com#a6a4118cc6aee085e5245f92c"
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold hover:bg-slate-100 hover:scale-105 transition-all duration-300 inline-block"
          >
            Try Mangools →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;