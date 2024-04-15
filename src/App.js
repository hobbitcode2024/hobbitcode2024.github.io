import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivacyPolicy from './app/PrivacyPolicy.js';
import TermsOfService from './app/TermsOfService.js';
import Home from './app/Home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;