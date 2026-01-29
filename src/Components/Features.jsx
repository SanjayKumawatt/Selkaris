import React from 'react';
import { motion } from 'framer-motion';
import { FileSearch, TrendingUp, Cpu, ShieldCheck } from 'lucide-react';

const WhatWeBuild = () => {
  const features = [
    {
      title: "Document Intelligence & Forecasting",
      desc: "AI platforms for document intelligence and forecasting.",
      icon: <FileSearch className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Scalable Software Systems",
      desc: "Scalable software systems designed for long-term growth.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Custom AI Tools",
      desc: "Custom AI tools aligned with real business use cases.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Reliable Support",
      desc: "Reliable support and maintenance for production systems.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section  className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm">
            Our Core Focus
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            What We’re Building
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:shadow-indigo-900/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Icon Box */}
                <div className={`shrink-0 p-4 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Decorative Background Gradient (Visible on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-transparent dark:from-indigo-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBuild;