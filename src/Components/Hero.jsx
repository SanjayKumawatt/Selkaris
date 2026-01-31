import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Code2, ShieldCheck } from 'lucide-react';

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section id="overview" className="relative pt-32 pb-20 lg:pt-22 lg:pb-32 overflow-hidden">

            {/* 1. Background Gradient Effects (Indigo/Violet Glow) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-[100px] opacity-70 animate-pulse-slow" />
                <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-[80px] opacity-60" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto"
                >
                    {/* 2. Top Pill / Badge */}
                    <motion.div variants={itemVariants} className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 shadow-sm">
                            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                            <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-200">
                                Next-Gen Software Engineering
                            </span>
                        </div>
                    </motion.div>

                    {/* 3. Main Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8"
                    >
                        Building Intelligent <br className="hidden sm:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 dark:from-indigo-400 dark:via-violet-400 dark:to-indigo-400">
                            Software Systems
                        </span> <br className="hidden sm:block" />
                        for Modern Businesses
                    </motion.h1>

                    {/* 4. Description Paragraphs (Tere Diye Hue Text) */}
                    <motion.div variants={itemVariants} className="space-y-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                        <p>
                            <strong className="text-slate-900 dark:text-white font-semibold">Selkaris Systems Private Limited</strong> is an early-stage technology startup focused on software support, maintenance, AI-powered platforms, and custom AI solutions designed for businesses that want reliability today and scalability tomorrow.
                        </p>
                        <p className="text-base sm:text-lg opacity-90">
                            We help organizations strengthen their existing software systems while gradually introducing intelligent automation, predictive analytics, and AI-driven workflows that solve real operational challenges. Our work is rooted in engineering discipline, secure system design, and practical AI adoption.
                        </p>
                    </motion.div>

                    {/* 5. CTA Button */}
                    <motion.div

                        variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button

                            onClick={() => scrollToSection('connect')}

                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-full transition-all shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95">
                            Start Building Now
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scrollToSection("ai-solutions")}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-full transition-all hover:scale-105 active:scale-95">
                            Explore Our Solutions
                        </button>
                    </motion.div>

                    {/* 6. Footer Trust Signals (Bottom Row) */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center gap-6 sm:gap-12 text-sm font-medium text-slate-500 dark:text-slate-400"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            <span>Engineering Discipline</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                            <span>Secure System Design</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-emerald-500" />
                            <span>Practical AI Adoption</span>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;