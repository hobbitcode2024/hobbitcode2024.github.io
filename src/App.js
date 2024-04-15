import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivacyPolicy from './app/PrivacyPolicy.js';
import TermsOfService from './app/TermsOfService.js';
import Home from './app/Home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/privacy" element={<PrivacyPolicy />} />
        <Route exact path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;