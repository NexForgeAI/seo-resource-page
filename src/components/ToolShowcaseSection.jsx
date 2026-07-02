import kwfinder from "../assets/kwfinder.png";
import serpchecker from "../assets/serpchecker.png";
import serpwatcher from "../assets/serpwatcher.png";

function ToolShowcaseSection() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">

          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            Mangools Tools
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mt-8 leading-[1.08]">
            See Mangools in Action
          </h2>

          <p className="text-xl md:text-2xl leading-9 text-slate-600 mt-10 max-w-3xl mx-auto">
            Explore the three most useful Mangools tools with real screenshots
            and learn how each one helps you improve your SEO.
          </p>

        </div>

        {/* ===================== */}
        {/* KWFinder Card */}
        {/* ===================== */}

        <div className="bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

          <div className="grid lg:grid-cols-2 items-center gap-20 p-14">

            {/* Left */}
            <div>

              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Keyword Research
              </span>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
  KWFinder
</h3>

              <p className="text-xl text-slate-600 leading-9 mb-10">
                Discover profitable keywords with search volume,
                keyword difficulty, search trends, and related keyword
                suggestions—all inside one beginner-friendly dashboard.
              </p>

              <ul className="space-y-5 mb-12">

                <li className="flex items-center gap-4 text-lg text-slate-700">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  Search Volume & Traffic Potential
                </li>

                <li className="flex items-center gap-4 text-lg text-slate-700">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  Keyword Difficulty Score
                </li>

                <li className="flex items-center gap-4 text-lg text-slate-700">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  Long-tail Keyword Suggestions
                </li>

                <li className="flex items-center gap-4 text-lg text-slate-700">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  Search Trend Analysis
                </li>

              </ul>

   <a
  href="https://mangools.com/kwfinder#a6a4118cc6aee085e5245f92c"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
>
  Explore KWFinder →
</a>

            </div>

            {/* Right */}
            <div>

             <img
  src={kwfinder}
  alt="KWFinder Screenshot"
  loading="lazy"
  decoding="async"
  width="1200"
  height="700"
  className="w-full rounded-3xl border border-slate-200 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
/>

            </div>

          </div>

        </div>

        {/* ===================== */}
        {/* SERPChecker Card */}
        {/* ===================== */}

        <div className="mt-24 bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

          <div className="grid lg:grid-cols-2 items-center gap-20 p-14">

            {/* Left Image */}
            <div>

             <img
  src={serpchecker}
  alt="SERPChecker Screenshot"
  loading="lazy"
  decoding="async"
  width="1200"
  height="700"
  className="w-full rounded-3xl border border-slate-200 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
/>

            </div>

            {/* Right */}
            <div>

              <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                SERP Analysis
              </span>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
  SERPChecker
</h3>

              <p className="text-xl text-slate-600 leading-9 mb-10">
                Analyze the top-ranking pages for any keyword. Compare SEO
                metrics like Domain Authority, backlinks, and ranking strength
                to understand exactly what you're competing against.
              </p>

              <ul className="space-y-5 mb-12">

  <li className="flex items-center gap-4 text-lg text-slate-700">
    <span className="text-orange-600 font-bold text-xl">✓</span>
    Competitor Analysis
  </li>

  <li className="flex items-center gap-4 text-lg text-slate-700">
    <span className="text-orange-600 font-bold text-xl">✓</span>
    Domain Authority Comparison
  </li>

  <li className="flex items-center gap-4 text-lg text-slate-700">
    <span className="text-orange-600 font-bold text-xl">✓</span>
    Backlink Metrics
  </li>

  <li className="flex items-center gap-4 text-lg text-slate-700">
    <span className="text-orange-600 font-bold text-xl">✓</span>
    Ranking Difficulty Insights
  </li>

</ul>

    <a
  href="https://mangools.com/serpchecker#a6a4118cc6aee085e5245f92c"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
>
  Explore SERPChecker →
</a>

            </div>

          </div>

        </div>

        {/* ===================== */}
        {/* SERPWatcher Card */}
        {/* ===================== */}

        <div className="mt-24 bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

          <div className="grid lg:grid-cols-2 items-center gap-20 p-14">

            {/* Left */}
            <div>

              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Rank Tracking
              </span>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
  SERPWatcher
</h3>

              <p className="text-xl text-slate-600 leading-9 mb-10">
                Monitor your keyword rankings over time and measure the impact
                of your SEO efforts with an easy-to-understand performance
                dashboard.
              </p>

              <ul className="space-y-5 mb-12">

                <li className="flex items-center gap-4 text-lg text-slate-700">
                  <span className="text-purple-600 font-bold text-xl">✓</span>
                  Daily Keyword Position Tracking
                </li>

                <li className="flex items-center gap-4 text-lg text-slate-700">
                  <span className="text-purple-600 font-bold text-xl">✓</span>
                  Visibility Performance Index
                </li>

                <li className="flex items-center gap-4 text-lg text-slate-700">
                  <span className="text-purple-600 font-bold text-xl">✓</span>
                  SEO Progress Monitoring
                </li>

                <li className="flex items-center gap-4 text-lg text-slate-700">
                  <span className="text-purple-600 font-bold text-xl">✓</span>
                  Historical Ranking Reports
                </li>

              </ul>

     <a
  href="https://mangools.com/serpwatcher#a6a4118cc6aee085e5245f92c"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
>
  Explore SERPWatcher →
</a>

            </div>

            {/* Right */}
            <div>

              <img
  src={serpwatcher}
  alt="SERPWatcher Screenshot"
  loading="lazy"
  decoding="async"
  width="1200"
  height="700"
  className="w-full rounded-3xl border border-slate-200 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
/>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ToolShowcaseSection;