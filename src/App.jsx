import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import { Element } from "react-scroll"; // Import Element from react-scroll

/* Components */
import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import WellnessSection from "./components/WellnessSection";
import PracticeLibrary from "./components/PracticeLibrary";
import ClassFlowSection from "./components/ClassFlowSection";
import YouTubeSection from "./components/YouTubeSection";
import Hero from "./components/Hero";
import Contacts from "./components/Contacts";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import MyTeachings from "./pages/MyTeachings";
import Contact from "./pages/Contact";
import BatchTimings from "./pages/BatchTimings";
import FreeTrial from "./pages/FreeTrial";
import ScrollToTop from "./components/ScrollToTop";
import { DailyRoutineSection } from "./components/DailyRoutineSection";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Use Element to wrap the Home component */}
          <Route
            path="/"
            element={
              <Element name="home-section">
                <Home />
              </Element>
            }
          />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/my-teachings" element={<MyTeachings />} />
          <Route path="/batch-timings" element={<BatchTimings />} />
          <Route path="/free-trial" element={<FreeTrial />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

function Home() {
  // Prevent touch event conflicts on mobile
  const handleTouchStart = (e) => {
    // Prevent any unwanted navigation on touch
    if (e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
      return; // Allow normal button/link behavior
    }
  };

  return (
    <div 
      onTouchStart={handleTouchStart}
      style={{ 
        touchAction: 'pan-y pinch-zoom',
        position: 'relative',
        isolation: 'isolate'
      }}
    >
      <Hero />
      <WellnessSection />
      <DailyRoutineSection/>  
      <Gallery />
      <ClassFlowSection />
      <YouTubeSection />
      <PracticeLibrary />
      <Feedback />
      <Contacts />
    </div>
  );
}

export default App;
