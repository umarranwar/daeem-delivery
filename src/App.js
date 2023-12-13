import React from "react";
import "./index.css";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import FAQ from "./components/accordians/FAQ";
import TermsAndConditions from "./components/accordians/TermsAndConditions";
import ReturnPolicy from "./components/accordians/ReturnPolicy";
import PrivacyPolicy from "./components/accordians/PrivacyPolicy";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="terms" element={<TermsAndConditions />} />
        <Route path="return" element={<ReturnPolicy />} />
        <Route path="privacy" element={<PrivacyPolicy />} />

      </Routes>
    </div>
  );
}

export default App;
