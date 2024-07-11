import { useState } from 'react';

export function useMultiStepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(2);

  function next() {
    setCurrentStepIndex( i => {
        if (i>=steps.length -1) return i;
        return i+1;
    });
  }

  function back() {
    setCurrentStepIndex( i => {
        if (i<=0) return i;
        return i-1;
    });
  }

  function goTo(index){
    if (currentStepIndex>index) {
      setCurrentStepIndex(index)
    }
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    next,
    back,
    goTo,
  };
}
