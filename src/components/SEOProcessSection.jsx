import {
  Search,
  BarChart3,
  FileText,
  LineChart,
} from "lucide-react";

function SEOProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Find Keywords",
      description:
        "Discover low-competition, high-potential keywords using KWFinder.",
    },
    {
      icon: BarChart3,
      title: "Analyze SERPs",
      description:
        "Study the top-ranking pages and understand your competitors with SERPChecker.",
    },
    {
      icon: FileText,
      title: "Create Content",
      description:
        "Write high-quality content that matches search intent and answers users' questions.",
    },
    {
      icon: LineChart,
      title: "Track Rankings",
      description:
        "Monitor your keyword rankings over time using SERPWatcher and improve continuously.",
    },
  ];

  return (
    <section className="py-28 lg:py-36 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">

          <span className="inline-block bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            SEO Workflow
          </span>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mt-8 leading-[1.08]">
            Simple 4-Step SEO Process
          </h2>

          <p className="text-xl md:text-2xl leading-9 text-slate-600 mt-10 max-w-3xl mx-auto">
            Follow this proven workflow to find opportunities, create better
            content, and improve your search engine rankings.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl border border-slate-200 p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-18 h-18 rounded-2xl bg-indigo-100 flex items-center justify-center mb-8">
                  <Icon className="w-9 h-9 text-indigo-600" />
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-5">
                  {step.title}
                </h3>

                <p className="text-lg leading-8 text-slate-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default SEOProcessSection;