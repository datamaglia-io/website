'use client';

import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      emoji: '🤖',
      title: 'Multi-Agent AI',
      description: 'Autonomous AI agents work 24/7',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      emoji: '⚡',
      title: 'Instant Detection',
      description: 'Violations flagged in <60 seconds',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      emoji: '🎯',
      title: '99.9% Accurate',
      description: 'Precision pattern recognition',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      emoji: '📊',
      title: 'Beautiful Dashboards',
      description: 'Real-time insights & analytics',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      emoji: '🔒',
      title: 'Full Compliance',
      description: 'GDPR, CCPA, HIPAA, SOC 2',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      emoji: '🔔',
      title: 'Smart Alerts',
      description: 'Priority-based notifications',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      emoji: '🔄',
      title: 'Auto-Remediation',
      description: 'AI fixes common violations',
      gradient: 'from-teal-500 to-green-500',
    },
    {
      emoji: '📦',
      title: 'Multi-Dataset',
      description: 'Unified monitoring platform',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-3"
          >
            Everything You Need.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Nothing You Don't.
            </span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              {/* Hover Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition duration-300`}></div>

              {/* Card */}
              <div className="relative bg-white dark:bg-slate-800 rounded-xl p-4 h-full border border-gray-200 dark:border-slate-700 group-hover:border-transparent transition-all duration-300 shadow-md group-hover:shadow-xl">
                <div className="text-4xl mb-3">{feature.emoji}</div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
