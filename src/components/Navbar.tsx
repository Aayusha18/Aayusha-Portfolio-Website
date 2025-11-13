import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    theme,
    toggleTheme
  } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  const navItems = ['Home', 'About', 'Projects', 'Experience', 'Contact'];
  return <motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-[#BDDDFC] dark:bg-gray-800'}`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/Pink_and_White_Minimalist_Initial_Makeup_Artist_Logo.png" alt="Aayusha Shingavi Logo" className="w-12 h-12 object-contain" />
            <span className="text-xl font-semibold text-[#384959] dark:text-white font-['Poppins']">
              Aayusha Shingavi
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="relative text-[#384959] dark:text-gray-300 hover:text-[#88BDF2] dark:hover:text-[#88BDF2] transition-colors duration-300 group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#88BDF2] group-hover:w-full transition-all duration-300" />
              </button>)}
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-[#88BDF2] dark:bg-gray-700 text-white hover:bg-[#6A89A7] dark:hover:bg-gray-600 transition-colors">
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-[#88BDF2] dark:bg-gray-700 text-white">
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#384959] dark:text-white">
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden mt-4 pb-4">
              <div className="flex flex-col gap-4">
                {navItems.map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-left text-[#384959] dark:text-gray-300 hover:text-[#88BDF2] dark:hover:text-[#88BDF2] transition-colors py-2">
                    {item}
                  </button>)}
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.nav>;
}