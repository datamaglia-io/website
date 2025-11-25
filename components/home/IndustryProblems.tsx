'use client';

import { motion } from 'framer-motion';

export default function IndustryProblems() {
  const problems = [
    {
      emoji: '⚠️',
      title: 'Manual Reviews Miss 73% of Violations',
      impact: '$4.24M avg cost per breach',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      emoji: '⏱️',
      title: 'Teams Waste 120+ Hours Monthly',
      impact: 'On repetitive data audits',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      emoji: '💸',
      title: 'Regulatory Fines Stack Up Fast',
      impact: 'GDPR, CCPA, HIPAA penalties',
      gradient: 'from-yellow-500 to-green-500',
    },
    {
      emoji: '📈',
      title: 'Data Volume Growing 300% Yearly',
      impact: 'Teams cannot scale manually',
      gradient: 'from-green-500 to-blue-500',
    },
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] to-white dark:to-slate-900"></div>

      <div className="container-custom relative z-10">
        {/* Section Header - Concise */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-3"
          >
            Manual Compliance is{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
              Broken
            </span>
          </motion.h2>
        </div>

        {/* Problems Grid - Visual Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${problem.gradient} rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-200`}></div>

              <div className="relative bg-white dark:bg-slate-800 rounded-xl p-4 h-full">
                <div className="text-4xl mb-3">{problem.emoji}</div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 leading-tight">
                  {problem.title}
                </h3>
                <p className="text-xs font-semibold text-[var(--text-secondary)]">
                  {problem.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Bold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Automate it all with AI
            </h3>
            <p className="text-base mb-5 opacity-90">
              Stop wasting time. Let AI agents handle compliance 24/7.
            </p>
            <a
              href="/demo"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg"
            >
              See How It Works →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
