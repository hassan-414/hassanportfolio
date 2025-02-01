import React from 'react';
import IntroSection from '../components/IntroSection';
import ServiceSection from '../components/ServiceSection';
import SkillSection from '../components/SkillsSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
    <IntroSection/>
    <ServiceSection/>
    <SkillSection/>
    <PortfolioSection/>
    <ContactSection/>
    <Footer/>
    </div>
  );
}

export default Home;
