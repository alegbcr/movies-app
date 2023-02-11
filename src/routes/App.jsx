import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useInitialState } from "../hooks/useInitialState";
import AppContext from "../context/AppContext";

// styles
import { GlobalStyle } from "./GlobalStyles";

// Components
import Menu from "../containers/Menu";
// Pages
import HomePage from "../pages/HomePage.jsx";
import TrendingPage from "../pages/TrendingPage.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";
import MoviePage from "../pages/MoviePage.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import NotFound from "../pages/NotFound.jsx";

function App() {
  const initialState = useInitialState();
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <AppContext.Provider value={initialState}>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/categories/:id" element={<CategoryPage />} />
            <Route path="/search/movie" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContext.Provider>
      </HashRouter>
    </>
  );
}

export default App;
