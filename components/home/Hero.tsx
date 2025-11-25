'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiCheck } from 'react-icons/fi';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Mesh Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%232563eb' stroke-width='1'%3E%3Cpath d='M0 0L60 0L60 60L0 60Z'/%3E%3Cpath d='M15 0L15 60M30 0L30 60M45 0L45 60'/%3E%3Cpath d='M0 15L60 15M0 30L60 30M0 45L60 45'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-3 py-1.5 rounded-full mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                Powered by Multi-Agent AI
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 leading-[1.1]">
              <span className="text-slate-900 dark:text-white">
                Automate
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Data Compliance
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-xl">
              AI agents monitor manufacturing & supply chain data 24/7.
              Detect violations instantly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/demo"
                className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all"
              >
                Start Free Trial
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all"
              >
                <FiPlay className="mr-2" />
                Watch Demo
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-1.5">
                <FiCheck className="text-green-600 w-4 h-4" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <FiCheck className="text-green-600 w-4 h-4" />
                <span>30-day trial</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-base font-bold">Compliance Dashboard</h3>
                    <p className="text-xs text-blue-100">Real-time monitoring</p>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-green-500 px-2 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold">Live</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Scans', value: '24.5K' },
                    { label: 'Violations', value: '156' },
                    { label: 'Critical', value: '12' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                      <div className="text-xl font-bold">{stat.value}</div>
                      <div className="text-xs text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 space-y-3">
                {/* Chart Placeholder */}
                <div className="relative h-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-end justify-around p-3">
                  {[60, 85, 45, 95, 70, 80, 65].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                      className="w-6 bg-gradient-to-t from-blue-600 to-indigo-600 rounded-t"
                    />
                  ))}
                </div>

                {/* Progress Indicators */}
                <div className="space-y-2">
                  {[
                    { label: 'Manufacturing', value: 85, color: 'bg-purple-600' },
                    { label: 'Supply Chain', value: 92, color: 'bg-green-600' },
                    { label: 'Logistics', value: 78, color: 'bg-blue-600' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-700 dark:text-slate-300">{item.label}</span>
                        <span className="font-bold text-slate-900 dark:text-white">{item.value}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ duration: 1, delay: 1.2 }}
                          className={`h-full ${item.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Alert Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-800 border-2 border-red-200 dark:border-red-800 rounded-lg p-3 shadow-xl max-w-[180px]"
              >
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1 animate-pulse"></div>
                  <div>
                    <p className="text-xs font-bold text-red-700 dark:text-red-400">Critical Alert</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">PII detected</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
