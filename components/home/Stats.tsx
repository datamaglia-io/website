'use client';

import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { value: '99.9%', label: 'Accuracy' },
    { value: '<60s', label: 'Detection' },
    { value: '24/7', label: 'Monitoring' },
    { value: '85%', label: 'Cost Savings' },
  ];

  return (
    <section className="py-10 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
