import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Target, Eye, PenTool, TestTube, TrendingUp, CheckCircle2, Cpu, Lightbulb } from 'lucide-react';

const OurStory = () => {
  
  const journeyPoints = [
    { text: "Designing and refining our AI platforms", icon: <PenTool className="w-5 h-5" /> },
    { text: "Testing systems with early users and pilot projects", icon: <TestTube className="w-5 h-5" /> },
    { text: "Improving performance, accuracy, and usability", icon: <TrendingUp className="w-5 h-5" /> },
    { text: "Validating real-world business use cases", icon: <CheckCircle2 className="w-5 h-5" /> },
    { text: "Optimizing system architecture for future scale", icon: <Cpu className="w-5 h-5" /> },
  ];

  return (
    <section id="our-story" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background Decor (Optional Subtle Gradient) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Header & Who We Are */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wider uppercase text-sm"
          >
            Our Story
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Who We Are
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            <span className="font-semibold text-slate-900 dark:text-white">Selkaris Systems Private Limited</span> is a newly established software and AI startup based in <span className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium"><MapPin size={16} /> Jaipur, Rajasthan, India.</span>
          </motion.p>
        </div>

        {/* 2. The Problem & Solution (Grid Layout) */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border-l-4 border-indigo-500"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Problem</h3>
            <p className="text-slate-600 dark:text-slate-400">
              We started Selkaris after observing a common problem: many businesses operate on <span className="text-red-500 dark:text-red-400 font-medium">fragile software systems</span> while experimenting with AI solutions that are not ready for real-world use.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border-l-4 border-emerald-500"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Goal</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Our goal is to change that. We focus on <span className="text-emerald-600 dark:text-emerald-400 font-medium">strong software foundations first</span>, then build intelligent systems on top of them - ensuring stability, security, and scalability.
            </p>
          </motion.div>
        </div>

        {/* 3. Startup Journey */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
               <motion.h3 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2"
               >
                 <Lightbulb className="text-yellow-500" /> Our Startup Journey
               </motion.h3>
               <motion.p 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 className="text-slate-600 dark:text-slate-300 mb-6"
               >
                 As an early-stage company, we are actively building the future. We believe that responsible innovation creates long-term value.
               </motion.p>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="space-y-4">
                {journeyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800"
                  >
                    <div className="text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 p-2 rounded-lg">
                      {point.icon}
                    </div>
                    <span className="text-slate-700 dark:text-slate-200 font-medium">{point.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-indigo-600 text-white shadow-xl shadow-indigo-500/20"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-indigo-100 text-lg leading-relaxed">
              To help businesses operate smarter by delivering reliable software systems and intelligent AI solutions built for real-world usage.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-slate-900 dark:bg-slate-800 text-white shadow-xl"
          >
            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              To become a trusted technology partner for organizations adopting scalable, secure, and data-driven systems.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;