import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [query, setQuery] = useState("");

  return (
    <>
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />

        <NavBar handleSearch={(query) => setQuery(query)} />

        <Routes>
          <Route
            path="/NewsDaily/search"
            element={
              <News
                setProgress={setProgress}
                key={query}
                category=""
                query={query}
              />
            }
          />

          <Route
            path="/NewsDaily/"
            element={
              <News
                setProgress={setProgress}
                key="home"
                category="breaking-news"
              />
            }
          />

          <Route
            path="/NewsDaily/Business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                category="business"
              />
            }
          />

          <Route
            path="/NewsDaily/Entertainment"
            element={
              <News
                setProgress={setProgress}
                key="culture"
                category="culture"
              />
            }
          />

          <Route
            path="/NewsDaily/Health"
            element={
              <News
                setProgress={setProgress}
                key="lifeandstyle"
                category="lifeandstyle"
              />
            }
          />

          <Route
            path="/NewsDaily/Sports"
            element={
              <News setProgress={setProgress} key="sport" category="sport" />
            }
          />

          <Route
            path="/NewsDaily/Technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                category="technology"
              />
            }
          />

          <Route
            path="/NewsDaily/Science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                category="science"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
