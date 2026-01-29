import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, CheckCircle2, ArrowRight, Compass, Cpu, Layers } from 'lucide-react';

const AISolutions = () => {
  
  const services = [
    {
      number: "3",
      title: "IntelliConsult",
      subtitle: "AI Strategy & Consulting",
      description: "IntelliConsult helps businesses plan, evaluate, and adopt AI in a structured and practical way. Not every process needs automation; we focus on identifying where AI delivers measurable value.",
      features: [
        "AI readiness assessment",
        "AI roadmap and implementation planning",
        "Digital transformation guidance",
        "Growth-oriented technology strategy"
      ],
      footerText: "Our consulting approach prioritizes business alignment, scalability, and sustainability.",
      icon: <Compass className="w-8 h-8 text-white" />,
      gradient: "from-emerald-500 to-teal-500",
      borderGroup: "group-hover:border-emerald-500/50"
    },
    {
      number: "4",
      title: "CustomMind AI",
      subtitle: "Custom AI Software Development",
      description: "CustomMind AI delivers tailor-made AI solutions designed around your specific business needs. We build intelligent systems that integrate seamlessly with existing software environments.",
      features: [
        "Custom AI tools and applications",
        "API-based AI services",
        "Intelligent automation systems",
        "Scalable AI architecture design"
      ],
      footerText: "Every solution is built for production usage, security, and long-term growth.",
      icon: <Code2 className="w-8 h-8 text-white" />,
      gradient: "from-indigo-600 to-violet-600",
      borderGroup: "group-hover:border-indigo-500/50"
    }
  ];

  return (
    <section id="ai-solutions" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider text-sm mb-3"
          >
            <Layers size={16} /> AI Solutions
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Scalable AI Services <br />
            <span className="text-slate-500 dark:text-slate-400">Built Around Your Business</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-300"
          >
            Our AI services help organizations adopt intelligence responsibly, efficiently, and at scale.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative flex flex-col bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 ${service.borderGroup}`}
            >
              
              {/* Top Badge & Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <div className="text-4xl font-black text-slate-200 dark:text-slate-800 select-none">
                  0{service.number}
                </div>
              </div>

              {/* Title Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <div className="h-1 w-12 bg-slate-200 dark:bg-slate-700 rounded-full mb-3 group-hover:w-20 group-hover:bg-indigo-500 transition-all duration-300" />
                <span className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {service.subtitle}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Feature List */}
              <div className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${index === 0 ? 'text-emerald-500' : 'text-indigo-500'}`} />
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Footer Note */}
              <div className={`mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 text-xs font-medium ${index === 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-indigo-600 dark:text-indigo-400'}`}>
                {service.footerText}
              </div>

              {/* Hover Glow Effect (Invisible by default, visible on hover) */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />
              
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button 
            onClick={() => document.getElementById('connect')?.scrollIntoView({behavior: 'smooth'})}
            className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
          >
            Discuss your AI Strategy <ArrowRight size={16} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default AISolutions;