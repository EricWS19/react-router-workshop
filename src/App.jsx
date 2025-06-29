import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div id="navbar" className="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>

      <div id="main-section">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/blue" element={<h1>Blue</h1>} />
          <Route path="/red" element={<h1>Red</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
