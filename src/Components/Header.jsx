import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Zap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from "../assets/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 1. Dark Mode State Logic
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // 2. Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Overview', id: 'overview' },
    { name: 'Our Story', id: 'our-story' },
    { name: 'Platforms', id: 'platforms' },
    { name: 'AI Solutions', id: 'ai-solutions' },
    { name: 'How We Build', id: 'how-we-build' },
    { name: 'Connect', id: 'connect' },
  ];

  // Reusable Theme Toggle Button Component (Style upgrade here)
  const ThemeToggle = ({ mobile = false }) => (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`relative p-2 rounded-full transition-all duration-300 border overflow-hidden ${
        mobile ? 'mr-2' : ''
      } ${
        theme === 'dark'
          ? 'bg-slate-800 border-slate-700 text-sky-400 hover:bg-slate-700 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]'
          : 'bg-orange-50 border-orange-200 text-orange-500 hover:bg-orange-100 hover:shadow-[0_0_15px_rgba(251,146,60,0.3)]'
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <Moon size={20} fill="currentColor" className="fill-sky-400/20" /> : <Sun size={20} fill="currentColor" className="fill-orange-500/20" />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div 
            onClick={() => scrollToSection('overview')} 
            className="flex items-center gap-1 cursor-pointer group select-none"
          >
            <img src={logo} className='h-13' alt="" />
            <span className="text-xl mb-2 font-bold tracking-tight text-slate-900 dark:text-white">
              SELKARIS <span className="text-indigo-600 dark:text-indigo-400">SYSTEMS</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name} 
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-full hover:bg-indigo-50 dark:hover:bg-slate-800/50"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right Side Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* New Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('connect')}
              className="ml-2 flex items-center gap-2 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-indigo-500/20"
            >
              Get Started
              <ChevronRight size={16} />
            </motion.button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle mobile={true} />
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 dark:text-white p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-900 rounded-xl transition-all"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
              <div className="pt-4 px-4">
                <button 
                  onClick={() => scrollToSection('connect')}
                  className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white py-3 rounded-xl font-medium active:scale-95 transition-all shadow-lg shadow-indigo-500/25"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;