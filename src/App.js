import logo from "./logo.svg";
import "./App.css";
import UpGap from "./components/navbar/UpGap";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Portfolio from "./components/portfolio/portfolio";
import Socials from "./components/header/Socials";
import About from "./components/about/about";
import Home from "./components/Home";
import Contact from "./components/contact/contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          {/* <Route path="/aboutme" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/header" element={<Header />} />
          <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
