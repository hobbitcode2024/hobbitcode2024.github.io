import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

import PrivacyPolicy from './app/PrivacyPolicy.js';
import TermsOfService from './app/TermsOfService.js';
import Home from './app/Home.js';

const Router = process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
