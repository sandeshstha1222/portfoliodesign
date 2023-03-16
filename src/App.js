import logo from "./logo.svg";
import "./App.css";
import UpGap from "./components/navbar/UpGap";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Socials from "./components/header/Socials";
import About from "./components/about/about";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route to="/" index element={<Home />} />
          <Route to="/aboutme" element={<About />} />
          <Route to="/header" element={<Header />} />
          {/* <Route to="#" element={<Socials />} />
          <Route to="#" element={<Footer />} />
          <Route to="/contactme" element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
