import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroBanner } from './components/sections/HeroBanner';
import { GamesSection } from './components/sections/GamesSection';
import { StatsSection } from './components/sections/StatsSection';
import { ThemeProvider } from './contexts/ThemeContext';
export function App() {
  return <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main className="flex-grow">
          <HeroBanner />
          <StatsSection />
          <div className="container mx-auto px-4 py-12">
            <GamesSection />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>;
}