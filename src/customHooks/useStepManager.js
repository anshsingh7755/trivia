import { ReactElement, useState } from "react";

export function useStepManager(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevState) => {
      if (prevState === steps.length - 1) {
        return prevState;
      } else {
        return prevState + 1;
      }
    });
  };

  const prevStep = () => {
    setCurrentStep((prevState) => {
      if ((prevState === 0)) {
        return prevState;
      } else {
        return prevState - 1;
      }
    });
  };

  const isFirstStep = currentStep===0;
  const isLastStep = currentStep===steps.length-1;


  const CurrenElement = steps[currentStep];

  return { currentStep, nextStep, prevStep, CurrenElement, isFirstStep, isLastStep };
}
