import React, { useContext, useEffect, useState } from "react";
import he from "he";

import "./MultipleChoiceQuestion.css";
import ScoreContext from "../context/ScoreContext";

export default function MultipleChoiceQuestion({ element, number }) {
  const { setScore } = useContext(ScoreContext);
  const shuffleOptions = (array) => {
    console.log("Exec");
    return array.sort(() => Math.random() - 0.5);
  };

  let makeClassName = (i) => {
    if (attempted) {
      if (options[i].correct) {
        return "buttonPrimary";
      }
      if (i === selectedOption) {
        return "buttonPrimary resultWrong";
      }
      return "buttonSecondary";
    }
    else{
      return "buttonSecondary"
    }
  };

  const [attempted, setAttempted] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [correct, setCorrect] = useState();
  const [options, setOptions] = useState(
    shuffleOptions([
      { option: element.correct_answer, correct: true },
      ...element.incorrect_answers.map((element) => {
        return {
          option: element,
          correct: false,
        };
      }),
    ])
  );

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    console.log("rendered");
  }, []);

  const handleClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    setAttempted(true);
  };

  useEffect(() => {
    if (attempted === true) {
      if (options[selectedOption].correct === true) {
        console.log("right");
        setCorrect(true);
        setScore(prev=>prev+1);
      } else {
        console.log(options);
        console.log("wrong");
        setCorrect(false);
      }
    }
  }, [attempted]);

  return (
    <div className="MCQ">
      <p className="numbering">{number}</p>
      <div>
        <div className="question">{he.decode(element.question)}</div>
        <div className="optionsWrapper">
          {options.map((e, i) => {
            return (
              <div key={i} className="SingleOption">
                <button
                  disabled={attempted ? true : false}
                  className={`optionButton ${makeClassName(i)}`}
                  onClick={() => handleClick(i)}
                >
                  {he.decode(e.option)}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
