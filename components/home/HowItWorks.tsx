'use client';

import { motion } from 'framer-motion';
import { FiDatabase, FiCpu, FiActivity, FiBell } from 'react-icons/fi';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: FiDatabase,
      title: 'Connect Your Data Sources',
      description: 'Seamlessly integrate with your existing data systems - manufacturing databases, customer records, supply chain platforms, and more.',
      details: ['One-click integrations', 'Secure API connections', 'No code required'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      icon: FiCpu,
      title: 'AI Agents Analyze',
      description: 'Our multi-agent system automatically scans your datasets, identifying violations, anomalies, and compliance risks using advanced AI.',
      details: ['Autonomous operation', 'Pattern recognition', 'Machine learning models'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '03',
      icon: FiActivity,
      title: 'Real-Time Detection',
      description: 'Violations are detected in real-time with severity classification, providing immediate visibility into compliance status.',
      details: ['Instant detection', 'Severity scoring', 'Root cause analysis'],
      color: 'from-green-500 to-green-600',
    },
    {
      number: '04',
      icon: FiBell,
      title: 'Alerts & Remediation',
      description: 'Get notified immediately about critical issues, with automated remediation for common violations and detailed reports for audits.',
      details: ['Smart notifications', 'Auto-remediation', 'Audit-ready reports'],
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  return (
    <section className="py-20 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary-color)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--manufacturing-accent)] rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[var(--text-primary)] mb-4"
          >
            How Datamaglia Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[var(--text-secondary)]"
          >
            From integration to remediation in four simple steps. No complex setup, no extensive training required.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-[var(--bg-card)] rounded-2xl p-8 shadow-[var(--shadow-lg)] border border-[var(--border-color)]">
                    <div className="flex items-start gap-6">
                      {/* Number Badge */}
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                        {step.number}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                          {step.title}
                        </h3>
                        <p className="text-[var(--text-secondary)] mb-4">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.details.map((detail) => (
                            <span
                              key={detail}
                              className="px-3 py-1 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-sm rounded-full border border-[var(--border-color)]"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                    <step.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-full w-1 h-8 bg-gradient-to-b from-[var(--primary-color)] to-transparent transform -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="/platform" className="btn-primary inline-block">
            Explore the Platform
          </a>
        </motion.div>
      </div>
    </section>
  );
}
