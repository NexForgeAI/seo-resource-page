import { useState } from "react";

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is keyword research?",
      answer:
        "Keyword research is the process of finding what people search for in Google."
    },
    {
      question: "Why is keyword research important?",
      answer:
        "It helps you create content people are actually searching for."
    },
    {
      question: "What is a keyword?",
      answer:
        "A keyword is a word or phrase users type into search engines."
    },
    {
      question: "What is search intent?",
      answer:
        "Search intent is the reason behind a user's search query."
    },
    {
      question: "What are long-tail keywords?",
      answer:
        "Long-tail keywords are longer, more specific search phrases."
    },
    {
      question: "What is keyword difficulty?",
      answer:
        "Keyword difficulty estimates how hard it is to rank for a keyword."
    },
    {
      question: "How do beginners find keywords?",
      answer:
        "Beginners can use tools like Mangools KWFinder to discover keyword opportunities."
    },
    {
      question: "Is SEO free?",
      answer:
        "Yes. SEO itself is free, although tools can help speed up the process."
    },
    {
      question: "How long does SEO take?",
      answer:
        "SEO results often take several months depending on competition and content quality."
    },
    {
      question: "Can a new website rank on Google?",
      answer:
        "Yes. New websites can rank by targeting less competitive keywords."
    },
    {
      question: "What is organic traffic?",
      answer:
        "Organic traffic is traffic coming from unpaid search engine results."
    },
    {
      question: "What is Mangools?",
      answer:
        "Mangools is an SEO toolkit that includes KWFinder and other SEO tools."
    },
    {
      question: "Is Mangools beginner-friendly?",
      answer:
        "Yes. It is widely considered one of the easiest SEO tools to learn."
    },
    {
      question: "How many keywords should I target?",
      answer:
        "Focus on one primary keyword and several related keywords per article."
    },
    {
      question: "Should I target high-volume keywords?",
      answer:
        "Not always. Lower competition keywords are often easier for beginners."
    },
    {
      question: "What is competition analysis?",
      answer:
        "Competition analysis evaluates who is currently ranking and how difficult ranking may be."
    },
    {
      question: "How often should I publish content?",
      answer:
        "Consistency matters more than frequency. Publish regularly."
    },
    {
      question: "Can I do SEO without paid tools?",
      answer:
        "Yes. Free tools and Google search can still provide valuable insights."
    },
    {
      question: "What is the easiest way to start SEO?",
      answer:
        "Start by learning keyword research and search intent."
    },
    {
      question: "Is SEO worth learning today?",
      answer:
        "Yes. SEO remains one of the most valuable long-term traffic channels."
    }
  ];

  return (
    <section
      id="faq"
      className="max-w-5xl mx-auto px-6 py-28 lg:py-36"
    >

      {/* Heading */}
      <div className="text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide">
          Frequently Asked Questions
        </span>

        <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08]">
          SEO Questions Answered
        </h2>

        <p className="mt-10 text-xl md:text-2xl leading-9 text-slate-600 max-w-3xl mx-auto">
          Everything beginners commonly ask about keyword research,
          SEO, search intent, and Mangools.
        </p>

      </div>

      {/* FAQ */}
      <div className="mt-20 space-y-5">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >

            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left p-7 flex justify-between items-center"
            >

              <span className="text-xl font-semibold text-slate-900">
                {faq.question}
              </span>

              <span className="text-3xl font-light text-slate-600">
                {openIndex === index ? "−" : "+"}
              </span>

            </button>

            {openIndex === index && (
              <div className="px-7 pb-7 text-lg leading-8 text-slate-600">
                {faq.answer}
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQSection;