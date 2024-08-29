import React, { useContext, useEffect, useState } from "react";

import { getQuestonAPI } from "../API";
import { ConfigContext } from "../context/ConfigContext";
import MultipleChoiceQuestion from "../components/MultipleChoiceQuestion";

import "./QuizPage.css";
import QuestionsWrapper from "../components/QuestionsWrapper";
import { useNavigate } from "react-router-dom";
import ScoreContext from "../context/ScoreContext";

export default function QuizPage() {
  const [questions, setQuestions] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const { config } = useContext(ConfigContext);
  const { score, setScore } = useContext(ScoreContext);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        getQuestonAPI(config.number, config.category, config.difficulty)
      );
      const data = await response.json();
      setQuestions(data.results);
      setLoading(false);
    };
    fetchData();
    setScore(0);
  }, [refresh]);

  return (
    <div>
      <div className="quizPageButtons">
        <button className="buttonPrimary" onClick={() => navigate("/")}>
          Back To Configure
        </button>
        <button
          className="buttonPrimary"
          onClick={() => {
            setRefresh((prev) => !prev);
          }}
        >
          Retake With Same Configuration
        </button>
      </div>
      {!loading ? (
        <>
          <QuestionsWrapper data={questions} />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
