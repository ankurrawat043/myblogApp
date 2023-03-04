import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
          <NavBar/>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/article/:name" element={<Article />} />
          <Route  path="/article-list" element={<ArticleList />} />
          <Route  path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
