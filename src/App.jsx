import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoadingSpinner } from "./components/LoadingSpinner.jsx";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/Contact";
import { ThankYou } from "./pages/ThankYou.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { About } from "./pages/About.jsx";
import "./styles/App.css";
import "./styles/root.css";
import { lazy, Suspense } from "react";

const WebsitesAppsPage = lazy(() => import("./pages/WebsitesApps.jsx"));
const GraphicDesignPage = lazy(() => import("./pages/GraphicDesign.jsx"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="spacer"></div>

        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/websites-apps" element={<WebsitesAppsPage />} />
            <Route path="/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
