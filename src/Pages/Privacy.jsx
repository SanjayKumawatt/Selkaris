import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // <--- Import Link
import { motion } from 'framer-motion';
import { Shield, Lock, ArrowLeft } from 'lucide-react'; // <--- Import ArrowLeft

const PrivacyPolicy = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Introduction",
      content: "Selkaris Systems Private Limited is committed to protecting the privacy of users, clients, and partners."
    },
    {
      title: "2. Information We Collect",
      items: [
        "Personal and business contact details",
        "Account and usage information",
        "Technical logs and diagnostics",
        "Support and communication records"
      ]
    },
    {
      title: "3. How We Use Information",
      items: [
        "Service delivery and system maintenance",
        "Product improvement and analytics",
        "Customer support and communication",
        "Legal and regulatory compliance"
      ]
    },
    {
      title: "4. Data Security",
      content: "We apply appropriate technical and organizational safeguards, including encryption, access control, and monitoring."
    },
    {
      title: "5. Data Sharing",
      content: "We do not sell personal data. Information is shared only with trusted partners where necessary to deliver services."
    },
    {
      title: "6. User Rights",
      content: "Users may request access, correction, or deletion of their data."
    },
    {
      title: "7. Data Retention",
      content: "Data is retained only as long as required for operational or legal purposes."
    },
    {
      title: "8. Policy Updates",
      content: "This policy may be updated periodically."
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
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
              <Shield className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-sm">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Last Updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
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
                <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                      <Lock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm">
          For any privacy-related concerns, please contact us at <span className="text-indigo-600 dark:text-indigo-400 font-medium">support@selkarissystems.in</span>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;