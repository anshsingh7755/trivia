import React from "react";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import ScoreComponent from "./ScoreComponent";

export default function QuestionsWrapper({ data }) {
  return (
    <div>
      {data.map((element, i) => {
        return (
          <div key={i} className="singleQuestion">
            <MultipleChoiceQuestion element={element} number={i + 1} />
          </div>
        );
      })}
      <ScoreComponent />
    </div>
  );
}
