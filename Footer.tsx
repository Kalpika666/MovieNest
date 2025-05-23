import React from 'react';
import { GamepadIcon, SparklesIcon, TrendingUpIcon, HeartIcon, PhoneIcon, MailIcon, MessageSquareIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <GamepadIcon size={24} className="text-purple-400" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                PlayNest
              </span>
            </h3>
            <p className="text-gray-300">
              Your ultimate destination for free browser-based gaming
              entertainment.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#featured" className="text-gray-300 hover:text-purple-400 flex items-center space-x-2">
                  <SparklesIcon size={16} />
                  <span>Featured Games</span>
                </a>
              </li>
              <li>
                <a href="#popular" className="text-gray-300 hover:text-purple-400 flex items-center space-x-2">
                  <TrendingUpIcon size={16} />
                  <span>Popular Games</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">About PlayNest</h4>
            <p className="text-gray-300">
              PlayNest offers a curated collection of free HTML5 games that you
              can play directly in your browser. No downloads required!
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/94715343510" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 flex items-center space-x-2">
                  <MessageSquareIcon size={16} />
                  <span>WhatsApp: +94 715343510</span>
                </a>
              </li>
              <li>
                <a href="tel:+94715343510" className="text-gray-300 hover:text-purple-400 flex items-center space-x-2">
                  <PhoneIcon size={16} />
                  <span>Phone: +94 715343510</span>
                </a>
              </li>
              <li>
                <a href="mailto:thenujarandinu.lk@gmail.com" className="text-gray-300 hover:text-purple-400 flex items-center space-x-2">
                  <MailIcon size={16} />
                  <span>Email: thenujarandinu.lk@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center space-x-1">
            <span>Made with</span>
            <HeartIcon size={16} className="text-red-500" />
            <span>by PlayNest</span>
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} PlayNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};