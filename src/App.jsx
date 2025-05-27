import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 4000,
    expectedReturn: 5,
    duration: 10,
  });

  const inputValidation = userInput.duration >= 1;

  function handleChange(inputId, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputId]: +newValue,
      };
    });
  }


  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputValidation && <p className="center">Invalid duration.</p>}
      {inputValidation && <Results userInput={userInput}/>}
    </>
  );
}

export default App;
