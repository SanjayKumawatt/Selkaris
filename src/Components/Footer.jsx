import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, MapPin, Mail, ArrowUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                SELKARIS <span className="text-indigo-600 dark:text-indigo-400">SYSTEMS</span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Building intelligent software foundations for modern businesses. Reliability today, scalability tomorrow.
            </p>
            
            
          </div>

          {/* Column 2: Quick Links (Navigation) */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Overview', id: 'overview' },
                { name: 'Platforms', id: 'platforms' },
                { name: 'AI Solutions', id: 'ai-solutions' },
                { name: 'How We Build', id: 'how-we-build' }
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal (Separate Pages) */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  to="/privacy-policy" 
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-and-conditions" 
                  onClick={scrollToTop}
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-400">
                  P.no. D-197 Anand Bihar, Jagatpura Bhankrota,<br />
                  Jagatpura, Jaipur, Rajasthan,<br />
                  India - 302017
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <a 
                  href="mailto:support@selkarissystems.in" 
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  support@selkarissystems.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500 dark:text-slate-500 text-center md:text-left">
            © {currentYear} Selkaris Systems Private Limited. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            
            <button 
              onClick={scrollToTop}
              className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-slate-600 dark:text-slate-400 transition-colors"
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;