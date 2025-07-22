import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTopButton from "./components/ScrollToTopButton";
import FaqSection from "./components/FaqSection";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import PageNotFound from "./pages/404";
import Login from "./pages/Login";

function AppContent() {
  const location = useLocation();

  const isNotFoundPage =
    location.pathname !== "/" &&
    location.pathname !== "/about" &&
    location.pathname !== "/services" &&
    location.pathname !== "/contact";

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />

        <Route path="/login" element={<Login />} />

      </Routes>
      {!isNotFoundPage && <FaqSection />}
      <ScrollTopButton />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}