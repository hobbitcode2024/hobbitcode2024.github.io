import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PrivacyPolicy from './app/PrivacyPolicy.js';
import TermsOfService from './app/TermsOfService.js';
import Home from './app/Home.js';

function App() {
  const router = createHashRouter([
    { path: '/', element: <Home /> },
    { path: '/privacy', element: <PrivacyPolicy /> },
    { path: '/terms', element: <TermsOfService /> },
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  // return (
  //   <Router basename={process.env.PUBLIC_URL}>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/privacy" element={<PrivacyPolicy />} />
  //       <Route path="/terms" element={<TermsOfService />} />
  //     </Routes>
  //   </Router>
  // );
  // ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  // );
}

export default App;
