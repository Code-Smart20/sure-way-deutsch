import React, { useState } from "react";

// ✅ Tip: Move static data outside the component scope only if it's reused.
const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "You can return any item within 30 days of purchase as long as it’s in its original condition.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days depending on your location.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. International shipping rates apply.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="container max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.question} // ✅ use unique string as key to avoid reordering issues
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            <button
              type="button" // ✅ Accessibility: declare button type
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium focus:outline-none flex justify-between items-center"
              aria-expanded={openIndex === index} // ✅ Accessibility: proper aria tag
              aria-controls={`faq-${index}`}
            >
              <span>{faq.question}</span>
              <span className="ml-2 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-${index}`}
                className="px-4 py-3 text-gray-700"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
