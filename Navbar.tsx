import React, { useState } from 'react';
import { GamepadIcon, SparklesIcon, TrendingUpIcon, MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    isDark,
    toggleTheme
  } = useTheme();
  return <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-200">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <GamepadIcon size={24} className="text-purple-600 dark:text-purple-400" />
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text text-2xl font-bold">
                PlayNest
              </span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#featured" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <SparklesIcon size={18} />
              <span>Featured Games</span>
            </a>
            <a href="#popular" className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <TrendingUpIcon size={18} />
              <span>Popular Games</span>
            </a>
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle theme">
              {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          </div>
          {/* Mobile Menu and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors" aria-label="Toggle theme">
              {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </nav>
        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 space-y-4">
            <a href="#featured" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700 rounded-md" onClick={() => setIsOpen(false)}>
              <div className="flex items-center space-x-2">
                <SparklesIcon size={18} />
                <span>Featured Games</span>
              </div>
            </a>
            <a href="#popular" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700 rounded-md" onClick={() => setIsOpen(false)}>
              <div className="flex items-center space-x-2">
                <TrendingUpIcon size={18} />
                <span>Popular Games</span>
              </div>
            </a>
          </div>}
      </div>
    </header>;
};