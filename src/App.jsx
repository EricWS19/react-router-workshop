import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Green from "./components/Green";
import Purple from "./components/Purple";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="/purple" element={<Purple />} />
          
        </Routes>
      </div>

      <footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#222",
          color: "white",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "10px",
        }}
      >
        <a href="/">Home</a>
        <a href="/blue">Blue</a>
        <a href="/red">Red</a>
        <a href="/green">Green</a>
        <a href="/purple">Purple</a>
      </footer>
    </div>
  );
}

export default App;
