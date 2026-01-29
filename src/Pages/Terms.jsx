import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // <--- Import Link
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, ArrowLeft } from 'lucide-react'; // <--- Import ArrowLeft

const TermsConditions = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Acceptance",
      content: "By accessing our services, you agree to these Terms & Conditions."
    },
    {
      title: "2. Services",
      content: "Selkaris Systems provides software support, AI platforms, and custom AI development services."
    },
    {
      title: "3. User Responsibilities",
      items: [
        "Provide accurate information",
        "Maintain account security",
        "Use services lawfully"
      ]
    },
    {
      title: "4. Intellectual Property",
      content: "All technology, software, and content are the property of Selkaris Systems unless otherwise stated."
    },
    {
      title: "5. Payments",
      content: "Pricing and payment terms are defined per agreement or service plan."
    },
    {
      title: "6. Limitation of Liability",
      content: "Selkaris Systems is not liable for indirect or consequential damages as permitted by law."
    },
    {
      title: "7. Termination",
      content: "Access may be suspended for misuse, non-payment, or legal violations."
    },
    {
      title: "8. Changes",
      content: "Terms may be updated with notice."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
              <FileText className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider text-sm">
              Agreement
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Please read these terms carefully before using our services.
          </p>
        </motion.div>

        {/* Content Blocks */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {section.title}
              </h2>
              
              {section.content && (
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {section.content}
                </p>
              )}

              {section.items && (
                <ul className="space-y-3 mt-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TermsConditions;