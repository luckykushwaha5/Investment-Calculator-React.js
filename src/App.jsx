import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserinput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  const validInputData = userInput.duration > 0;

  function changeHandler(inputIdentifier, newValue) {
    setUserinput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} changeHandler={changeHandler}/>
      {validInputData ? <Result input={userInput} />: <p className="center">Please enter Duration greater than 0</p>}
    </>
  );
}

export default App;
