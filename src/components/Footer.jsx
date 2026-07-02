function Footer() {
  return (
    <footer
      id="about"
      className="bg-slate-900 text-slate-300 py-20 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-white">
              SEO Resource
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400 max-w-lg">
              A beginner-friendly SEO resource that teaches keyword
              research, search intent, competition analysis, and how
              to use Mangools to find ranking opportunities.
            </p>
          </div>

          <div className="md:text-right">

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <a
                href="#guide"
                className="block hover:text-white transition"
              >
                Guide
              </a>

              <a
                href="#faq"
                className="block hover:text-white transition"
              >
                FAQ
              </a>

              <a
                href="#about"
                className="block hover:text-white transition"
              >
                About
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-700 my-12"></div>

        {/* Affiliate Disclosure */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-4">
            Affiliate Disclosure
          </h3>

          <p className="leading-8 text-slate-400">
            Some links on this website may become affiliate links in
            the future. This means we may earn a small commission at
            no extra cost to you if you decide to purchase through
            those links. We only recommend tools that we genuinely
            believe are useful.
          </p>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-slate-500">

          <p>
            © {new Date().getFullYear()} SEO Resource. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;