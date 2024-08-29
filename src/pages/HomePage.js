import React, { useContext, useEffect, useState } from "react";
import { useStepManager } from "../customHooks/useStepManager";
import SelectCategoryPage from "./SelectCategoryPage";
import SelectNoOfQuestionPage from "./SelectNoOfQuestionPage"
import QuizPage from "./QuizPage";
import { category, getQuestonAPI, server } from "../API";
import {ConfigContext} from "../context/ConfigContext";

export default function HomePage() {
  const {
    currentStep,
    CurrenElement,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
  } = useStepManager([SelectCategoryPage, SelectNoOfQuestionPage]);

  const {config, setConfig, setCategories} = useContext(ConfigContext)

  const fetchCatagories = async () => {
    const response = await fetch(`${server}${category}`);
    const data = await response.json();
    setCategories(data.trivia_categories);
  };

  useEffect(() => {
    fetchCatagories();
  }, []);



  return (
    <div>
      <CurrenElement nextStep={nextStep} prevStep={prevStep}/>
    </div>
  );
}
