import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRightIcon, MailIcon } from 'lucide-react';
export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-b from-[#BDDDFC] to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-[#384959] dark:text-white font-['Poppins'] leading-tight">
              Hi, I'm Aayusha Shingavi
            </h1>
            <div className="text-2xl md:text-3xl text-[#6A89A7] dark:text-[#88BDF2] font-medium">
              <TypeAnimation sequence={['AI Product Manager', 2000, 'Data Analyst', 2000, 'Business Analyst', 2000, 'Strategy Analyst', 2000, 'Product Operations Specialist', 2000, 'Product Designer', 2000, 'Product Strategist', 2000]} wrapper="span" speed={50} repeat={Infinity} />
            </div>
            <p className="text-lg text-[#384959] dark:text-gray-300 leading-relaxed">
              "I think like a system, design like a creator, and question like a
              search engine. Building products (and myself) one iteration at a
              time."
            </p>
            <div className="flex gap-4 pt-4">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} onClick={() => scrollToSection('projects')} className="px-8 py-3 bg-[#88BDF2] text-white rounded-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
                Explore My Work
                <ArrowRightIcon className="w-4 h-4" />
              </motion.button>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} onClick={() => scrollToSection('contact')} className="px-8 py-3 border-2 border-[#6A89A7] dark:border-[#88BDF2] text-[#6A89A7] dark:text-[#88BDF2] rounded-lg font-medium flex items-center gap-2 hover:bg-[#6A89A7] hover:text-white dark:hover:bg-[#88BDF2] transition-colors">
                Let's Connect
                <MailIcon className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} className="flex justify-center">
            <motion.div animate={{
            y: [0, -20, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }} className="relative">
              <div className="w-80 h-80 rounded-[3rem] bg-gradient-to-br from-[#BDDDFC] to-[#88BDF2] p-1 shadow-2xl">
                <div className="w-full h-full rounded-[3rem] overflow-hidden">
                  <img src="/wmremove-transformed.png" alt="Aayusha Shingavi" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}