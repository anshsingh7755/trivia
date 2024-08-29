import React, { useContext } from "react";
import ScoreContext from "../context/ScoreContext";
import { ConfigContext } from "../context/ConfigContext";

export default function ScoreComponent() {
  const { score } = useContext(ScoreContext);
  const { config } = useContext(ConfigContext);
  return (
    <div style={{display: "flex",justifyContent: "center"}}>
      <h3>
        Your Score is {score}/{config.number}
      </h3>
    </div>
  );
}
