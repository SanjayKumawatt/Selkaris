import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Layers, Repeat, ArrowRight, CheckCircle2 } from 'lucide-react';

const HowWeBuild = () => {
  
  const focusAreas = [
    {
      title: "Performance and reliability",
      icon: <Zap className="w-6 h-6" />,
      desc: "Optimized for speed and uptime."
    },
    {
      title: "Secure data handling",
      icon: <Shield className="w-6 h-6" />,
      desc: "Enterprise-grade security standards."
    },
    {
      title: "Modular and scalable architecture",
      icon: <Layers className="w-6 h-6" />,
      desc: "Built to grow with your business."
    },
    {
      title: "Continuous improvement",
      icon: <Repeat className="w-6 h-6" />,
      desc: "Iterative updates and refinements."
    }
  ];

  const scrollToConnect = () => {
    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section  className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content & CTA */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Designed for Growth <br />
                <span className="text-indigo-600 dark:text-indigo-400">from Day One</span>
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
                We are building our products and services with a clear focus on engineering excellence. We don't just write code; we architect solutions.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToConnect}
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all mb-8"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Bottom Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Early-stage friendly
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Secure by design
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Built to scale
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Feature List */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {focusAreas.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeBuild;