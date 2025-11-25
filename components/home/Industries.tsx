'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Industries() {
  const industries = [
    {
      emoji: '🏭',
      title: 'Manufacturing',
      description: 'Equipment data, production records, IP protection',
      stat: '85%',
      statLabel: 'Faster audits',
      color: 'from-purple-600 to-indigo-600',
    },
    {
      emoji: '🚚',
      title: 'Supply Chain',
      description: 'Vendor verification, shipment tracking, inventory quality',
      stat: '92%',
      statLabel: 'Fewer violations',
      color: 'from-green-600 to-teal-600',
    },
    {
      emoji: '📦',
      title: 'Distribution',
      description: 'Warehouse systems, customer PII, order fulfillment',
      stat: '99.9%',
      statLabel: 'Detection rate',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      emoji: '🗺️',
      title: 'Logistics',
      description: 'Driver privacy, GPS compliance, route optimization',
      stat: '<60s',
      statLabel: 'Response time',
      color: 'from-yellow-600 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4"
          >
            Built for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Your Industry
            </span>
          </motion.h2>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 p-8 border border-gray-200 dark:border-slate-600 hover:scale-105 transition-transform duration-300"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-6xl">{industry.emoji}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stat Badge */}
                <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${industry.color} text-white px-6 py-3 rounded-full shadow-lg`}>
                  <div className="text-2xl font-bold">{industry.stat}</div>
                  <div className="text-sm opacity-90">{industry.statLabel}</div>
                </div>

                {/* Learn More Link */}
                <Link
                  href={`/solutions#${industry.title.toLowerCase()}`}
                  className="inline-flex items-center mt-6 text-blue-600 dark:text-blue-400 font-semibold hover:gap-2 transition-all group"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
