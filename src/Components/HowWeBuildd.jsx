import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Box, Cpu, RefreshCw, GitMerge } from 'lucide-react';

const HowWeBuildd = () => {
  
  const principles = [
    {
      title: "Scalable Architecture",
      desc: "Systems designed to grow without major redesigns.",
      icon: <GitMerge className="w-6 h-6 text-white" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Security-First Design",
      desc: "Strong access controls, encryption practices, and monitoring.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Modular Development",
      desc: "Independent components that are easy to maintain and improve.",
      icon: <Box className="w-6 h-6 text-white" />,
      gradient: "from-orange-500 to-amber-500"
    },
    {
      title: "Production-Ready AI",
      desc: "AI systems designed for real-world workloads, not experiments.",
      icon: <Cpu className="w-6 h-6 text-white" />,
      gradient: "from-violet-600 to-purple-600"
    },
    {
      title: "Continuous Improvement",
      desc: "Ongoing optimization based on performance and usage data.",
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="how-we-build" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase text-sm"
          >
            How We Build
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Our Engineering & <br /> Development Approach
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            We follow modern software engineering principles to ensure reliability and scalability.
          </motion.p>
        </div>

        {/* Principles Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {principles.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 group ${
                // Center the last two items if on large screen (Logic for 5 items)
                index >= 3 ? 'lg:col-span-1.5 lg:mx-auto lg:w-full' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeBuildd;