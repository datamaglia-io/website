'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>

      {/* Animated Mesh Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-pink-400 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Ready to Go on{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-300">
                Autopilot?
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8 font-light">
              Join companies automating compliance with AI agents.
            </p>

            {/* Quick Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                'Free 30-day trial',
                'No credit card',
                'Cancel anytime',
                '24/7 support',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center space-x-1.5 text-white">
                  <FiCheck className="w-4 h-4 flex-shrink-0" />
                  <span className="font-semibold text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/demo"
                className="group relative px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Start Free Trial</span>
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/platform"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 text-lg font-bold rounded-xl hover:bg-white/20 transition-all"
              >
                Watch Demo
              </Link>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <p className="text-white/60 text-xs mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-6 opacity-70">
                {['Manufacturing Co.', 'Global Logistics', 'Supply Chain Inc.'].map((company) => (
                  <span key={company} className="text-white text-base font-bold">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
