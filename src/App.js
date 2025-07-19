// import React from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";
// import ScrollTopButton from "./components/ScrollToTopButton";
// import FaqSection from "./components/FaqSection";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import PageNotFound from "./pages/404";
// import AdminDashboard from "./pages/AdminDashboard";
// import DoctorDashboard from "./pages/DoctorDashboard";
// import PatientDashboard from "./pages/PatientDashboard";
// import Login from "./pages/Login";
// import AdminRegister from "./pages/RegisterAdmin";
// import PatientRegister from "./pages/RegisterUser";
// import DoctorRegister from "./pages/RegisterDoctor";

// function AppContent() {
//   const location = useLocation();

//   const isNotFoundPage =
//     location.pathname !== "/" &&
//     location.pathname !== "/about" &&
//     location.pathname !== "/services" &&
//     location.pathname !== "/contact";

//   return (
//     <>
//       <ScrollToTop />
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/*" element={<PageNotFound />} />

//         <Route path="/login" element={<Login />} />

//         <Route path="/register/admin" element={<AdminRegister />} />
//         <Route path="/register/user" element={<PatientRegister />} />
//         <Route path="/register/doctor" element={<DoctorRegister />} />



//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
//         <Route path="/patient-dashboard" element={<PatientDashboard />} />
//       </Routes>
//       {!isNotFoundPage && <FaqSection />}
//       <ScrollTopButton />
//       <Footer />
//     </>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }



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
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import Login from "./pages/Login";
import AdminRegister from "./pages/RegisterAdmin";
import PatientRegister from "./pages/RegisterUser";
import DoctorRegister from "./pages/RegisterDoctor";

function AppContent() {
  const location = useLocation();

  const noLayoutRoutes = [
    "/login",
    "/register/admin",
    "/register/user",
    "/register/doctor",
    "/admin-dashboard",
    "/doctor-dashboard",
    "/patient-dashboard",
  ];

  const isNoLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!isNoLayout && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/admin" element={<AdminRegister />} />
        <Route path="/register/user" element={<PatientRegister />} />
        <Route path="/register/doctor" element={<DoctorRegister />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {!isNoLayout && <FaqSection />}
      {!isNoLayout && <ScrollTopButton />}
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
