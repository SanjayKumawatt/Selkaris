import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scan, Brain, TrendingUp, BarChart3, AlertTriangle, Check, ArrowRight, Layers, Sparkles } from 'lucide-react';

const Platforms = () => {
  return (
    <section id="platforms" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={12} /> Powered by Next-Gen AI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            AI Platforms Designed for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
              Practical Business Use
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our platforms are built to reduce manual effort, improve decision-making, and support data-driven operations.
          </p>
        </motion.div>

        {/* =======================
            PLATFORM 1: DOCUMIND AI 
           ======================= */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">DocuMind AI</h3>
              </div>
              
              <h4 className="text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                Intelligent Document Understanding Platform
              </h4>
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                DocuMind AI is an AI-powered document intelligence platform designed to help organizations analyze, extract, and summarize information from large volumes of documents. It automates time-consuming manual reviews with accuracy and consistency.
              </p>

              {/* Capabilities Grid */}
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1"><Scan className="w-5 h-5 text-blue-500" /></div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Document Analysis</h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Processes PDFs and structured documents to understand content, layout, and context.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1"><Layers className="w-5 h-5 text-blue-500" /></div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Smart Extraction</h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Automatically extracts names, dates, values, clauses, and entities.</p>
                  </div>
                </div>
              </div>

              {/* Use Cases Pills */}
              <div className="flex flex-wrap gap-2">
                {['Contract Review', 'Financial Reports', 'Compliance', 'Knowledge Base'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual (Floating Cards - Inspired by your Image) */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Main Glass Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 m-auto w-64 h-80 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-2xl shadow-blue-500/30 flex flex-col items-center justify-center text-white z-10 border border-white/20 backdrop-blur-sm"
              >
                <FileText size={48} className="mb-4 text-blue-100" />
                <div className="w-32 h-2 bg-white/20 rounded-full mb-2" />
                <div className="w-24 h-2 bg-white/20 rounded-full mb-2" />
                <div className="w-28 h-2 bg-white/20 rounded-full" />
                <div className="mt-8 px-4 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20">
                  Processing...
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-10 right-0 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-20"
              >
                <Check className="w-6 h-6 text-emerald-500" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-20 left-0 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 flex items-center gap-2"
              >
                <Scan className="w-5 h-5 text-blue-500" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">99% Accuracy</span>
              </motion.div>
            </div>
          </div>
        </div>


        {/* =======================
            PLATFORM 2: PREDICTAFLOW AI 
           ======================= */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual (Floating Cards) */}
          <div className="flex-1 flex justify-center">
             <div className="relative w-full max-w-md aspect-square">
              {/* Main Glass Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 m-auto w-80 h-64 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl shadow-2xl shadow-violet-500/30 flex flex-col items-center justify-center text-white z-10 border border-white/20 backdrop-blur-sm"
              >
                <div className="flex items-end gap-2 mb-4 h-24">
                  <div className="w-4 h-12 bg-white/30 rounded-t-sm" />
                  <div className="w-4 h-16 bg-white/50 rounded-t-sm" />
                  <div className="w-4 h-10 bg-white/30 rounded-t-sm" />
                  <div className="w-4 h-20 bg-white/80 rounded-t-sm" />
                  <div className="w-4 h-14 bg-white/40 rounded-t-sm" />
                </div>
                <div className="px-4 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20">
                  Trend Detected
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 left-0 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-20"
              >
                <TrendingUp className="w-6 h-6 text-violet-500" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-10 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 flex items-center gap-2"
              >
                <Brain className="w-5 h-5 text-purple-500" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">Predictive Logic</span>
              </motion.div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">PredictaFlow AI</h3>
              </div>
              
              <h4 className="text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                Forecasting & Trend Prediction Platform
              </h4>
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Uncertainty makes planning difficult. PredictaFlow AI transforms raw data into actionable insights, helping organizations anticipate future outcomes using historical and operational data.
              </p>

              {/* Capabilities Grid */}
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1"><TrendingUp className="w-5 h-5 text-violet-500" /></div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Sales & Demand Forecasting</h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Identify revenue trends and optimize inventory/staffing allocation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1"><AlertTriangle className="w-5 h-5 text-violet-500" /></div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Risk Analysis</h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Detect potential risks early by identifying patterns and anomalies.</p>
                  </div>
                </div>
              </div>

              {/* Use Cases Pills */}
              <div className="flex flex-wrap gap-2">
                {['Strategic Planning', 'Supply Chain', 'Financial Forecasting', 'Risk Detection'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-indigo-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to automate your workflow?</h3>
            <p className="text-indigo-200 mb-8 max-w-xl mx-auto">
              Whether it's document intelligence or predictive analytics, we build systems that scale with you.
            </p>
            <button onClick={() => document.getElementById('connect')?.scrollIntoView({behavior: 'smooth'})} className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors">
              Request a Demo
              <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Decorative Circles inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </motion.div>

      </div>
    </section>
  );
};

export default Platforms;