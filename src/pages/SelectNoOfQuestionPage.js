import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import CategorySelector from "../components/CategorySelector";
import { server, category } from "../API";

import "./SelectNoOfQuestionPage.css";
import {ConfigContext} from "../context/ConfigContext";
import { useNavigate } from "react-router-dom";

const nums = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 15, label: "15" },
  { value: 20, label: "20" },
  { value: 25, label: "25" },
  { value: 30, label: "30" },
  { value: 40, label: "40" },
  { value: 50, label: "50" },
];

const difficulties = [
  { value: false, label: "Any Difficulty" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

export default function SelectNoOfQuestionPage({ nextStep, prevStep }) {
  const { config, setConfig, categories } = useContext(ConfigContext);
  console.log(config);
  const navigate = useNavigate();

  const handleNumber = (num) => {
    setConfig((prev) => {
      return { ...prev, number: num.value };
    });
  };

  const handleDifficulty = (diff) => {
    setConfig((prev) => {
      return { ...prev, difficulty: diff.value };
    });
  };

  const handleSubmit = () => {
    navigate('/quiz')
  };

  return (
    <div className="seconfConfigPageWrapper">
      <div className="seconfConfigPage">
        <div className="backButton">
          <button className="buttonSecondary" onClick={prevStep}>
            Back to Category
          </button>
          <p className="selectedCategory">Selected Category <strong>"{config.categoryName}"</strong></p>
        </div>
        <div className="numberOfQuestionWrapper">
          <h3 className="title">Select Number of Questions</h3>
          <div className="numberSelectorWrapper">
            <Select options={nums} onChange={handleNumber}/>
          </div>
        </div>
        <div className="difficultyWrapper">
          <h3 className="title">Select Difficulty of Questions</h3>
          <div className="difficultySelectorWrapper">
            <Select options={difficulties} onChange={handleDifficulty}/>
          </div>
        </div>
      </div>
      <button className="buttonPrimary" onClick={handleSubmit}>
        Start Quiz
      </button>
    </div>
  );
}
