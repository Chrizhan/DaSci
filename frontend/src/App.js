import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
    return (
        <Router>
        <div>
            {/* You can add a header or navbar here if you want */}
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            </Routes>
        </div>
        </Router>
    );
}

export default App;
