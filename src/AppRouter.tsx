import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { CampusCompassDetail } from './pages/CampusCompassDetail';
import { SugamAIDetail } from './pages/SugamAIDetail';
import { MetaverseEducationDetail } from './pages/MetaverseEducationDetail';
import { ThemeProvider } from './contexts/ThemeContext';
export function AppRouter() {
  return <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/project/campus-compass" element={<CampusCompassDetail />} />
          <Route path="/project/sugam-ai" element={<SugamAIDetail />} />
          <Route path="/project/metaverse-education" element={<MetaverseEducationDetail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>;
}