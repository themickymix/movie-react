import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Results from "./pages/Results";
import MovieSec from "./pages/Movie_section";
import TV from "./pages/TV_section";
import Trending from "./pages/Trending";

function App() {
  return (
    <Router>
      <NavBar /> {/* Your navigation bar is here */}
      <Routes>
        <Route path="/" element={<Trending />} /> {/* Home */}
        <Route path="/movie" element={<MovieSec />} /> {/* Movie page */}
        <Route path="/tvseries" element={<TV />} /> {/* TV Series page */}
        <Route path="/results" element={<Results />} />{" "}
        {/* Search Results page */}
      </Routes>
    </Router>
  );
}

export default App;
