import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { WebsitesAppsPage } from "./pages/WebsitesApps";
import { GraphicDesignPage } from "./pages/GraphicDesign";
// import "./styles/Layout.css";
import "./styles/App.css";
import "./styles/root.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="spacer"></div>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/websites-apps" element={<WebsitesAppsPage />} />
          <Route path="/graphic-design" element={<GraphicDesignPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
