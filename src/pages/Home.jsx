import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LanguagesSection from '../components/home/LanguagesSection';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <LanguagesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;