import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/Contact";
import { WebsitesAppsPage } from "./pages/WebsitesApps";
import { GraphicDesignPage } from "./pages/GraphicDesign";
import { ThankYou } from "./pages/ThankYou.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import "./styles/App.css";
import "./styles/root.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="spacer"></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/websites-apps" element={<WebsitesAppsPage />} />
          <Route path="/graphic-design" element={<GraphicDesignPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
