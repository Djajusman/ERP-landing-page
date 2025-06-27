import React from 'react';
import Pricing from "./components/Pricing";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Layout from "./components/Layout/Layout";
import SeoHead from "./components/SeoHead";

function App() {
  return (
    <>
      <SeoHead title='KeDA Tech Landing Page' />
      <Layout>
        <Hero />
        <Pricing />
        <Contact />
      </Layout>
    </>
  );
}

export default App; 