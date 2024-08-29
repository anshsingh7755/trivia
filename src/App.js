import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SelectCategoryPage from "./pages/SelectCategoryPage";
import QuizPage from "./pages/QuizPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import { createContext, useState } from "react";
import { ConfigContext } from "./context/ConfigContext";
import ScoreContext from "./context/ScoreContext";

function App() {
  const [config, setConfig] = useState({
    category: false,
    number: 10,
    difficulty: false,
    categoryName: "Any Category"
  });
  const [categories, setCategories] = useState(null);
  const [score, setScore] = useState(null);

  return (
    <div className="App">
      <ConfigContext.Provider
        value={{ config, setConfig, categories, setCategories }}
      >
        <ScoreContext.Provider value={{score, setScore}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/quiz" Component={QuizPage} />
              {/* <Route path="/score" Component={ScorePage} /> */}
            </Routes>
          </BrowserRouter>
        </ScoreContext.Provider>
      </ConfigContext.Provider>
    </div>
  );
}

export default App;
