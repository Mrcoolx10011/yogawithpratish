import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import { Element } from "react-scroll"; // Import Element from react-scroll

/* Components */
import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WellnessSection from "./components/WellnessSection";
import TeachingsSection from "./components/TeachingsSection";
import ClassFlowSection from "./components/ClassFlowSection";
import YouTubeSection from "./components/YouTubeSection";
import Hero from "./components/Hero";
import Contacts from "./components/Contacts";
import Demo from "./components/Demo";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";
import User from "./pages/User";
import Footer from "./components/Footer";
// import AuthProvider from "./provider/AuthProvider";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import MyTeachings from "./pages/MyTeachings";
import Contact from "./pages/Contact";
import BatchTimings from "./pages/BatchTimings";
import FreeTrial from "./pages/FreeTrial";
import Cart from "./components/Cart";
import { MyContextProvider } from "./context/Context.jsx";
import Ourteam from "./components/Ourteam";

function App() {
  return (
    <div className="app">
      <MyContextProvider>
        <BrowserRouter>
          {/* <AuthProvider> */}
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
              <Route path="/cart" element={<Cart />} />

              <Route path="/demo" element={<Demo />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user" element={<User />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/my-teachings" element={<MyTeachings />} />
              <Route path="/batch-timings" element={<BatchTimings />} />
              <Route path="/free-trial" element={<FreeTrial />} />
            </Routes>
            <Footer />
          {/* </AuthProvider> */}
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <TeachingsSection />
      <ClassFlowSection />
      <WellnessSection />
      <YouTubeSection />
      <Gallery />
      <Feedback />
      <Contacts />
    </>
  );
}

export default App;
