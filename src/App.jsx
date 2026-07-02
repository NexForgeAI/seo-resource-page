import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import LearningSection from "./components/LearningSection";
import ExamplesSection from "./components/ExamplesSection";
import KeywordGuideSection from "./components/KeywordGuideSection";
import SearchIntentGuideSection from "./components/SearchIntentGuideSection";
import CompetitionAnalysisSection from "./components/CompetitionAnalysisSection";
import MangoolsGuideSection from "./components/MangoolsGuideSection";
import ToolShowcaseSection from "./components/ToolShowcaseSection";
import SEOProcessSection from "./components/SEOProcessSection";
import FAQSection from "./components/FAQSection";
import ComparisonSection from "./components/ComparisonSection";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <LearningSection />
      <ExamplesSection />
      <KeywordGuideSection />
      <SearchIntentGuideSection />
      <CompetitionAnalysisSection />
      <MangoolsGuideSection />
      <ToolShowcaseSection />
      <SEOProcessSection />
      <FAQSection />
      <ComparisonSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;