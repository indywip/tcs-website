import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ScrollToTop from './hooks/ScrollToTop.js'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
          <Routes>
            <Route path='/'>
                  <Route index element={<Home />} />
                  <Route path='about' element={<About />} />
              </Route>
          </Routes>
      <Footer />
   </BrowserRouter>
  );
}

export default App;
