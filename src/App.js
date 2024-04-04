import { lazy } from "react";
const Featured = lazy(() => import("./components/Featured"));
const Header = lazy(() => import("./components/Header"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const SectionsMeal = lazy(() => import("./components/SectionsMeal"));
const Testimonial = lazy(() => import("./components/Testimonial"));
const Pricing = lazy(() => import("./components/Pricing"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Featured />
      <HowItWorks />
      <SectionsMeal />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
