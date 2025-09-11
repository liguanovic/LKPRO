import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import CGV from './Pages/CGV/CGV';
import FAQ from './Pages/FAQ/FAQ';
import Error from './Pages/Error/Error';

import Product from './Pages/Product/Product';

import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/ScrollTop/ScrollTop';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/LKPRO">
      <ScrollToTop />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/CGV" element={<CGV />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="*" element={<Error />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
