import React, { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

function App() {
  const [userInput, setUserInput] = useState("");

  const calculateHandler = (userInput) => {
    if(userInput === ''){
      setUserInput("")
      
    }else{
      setUserInput(userInput)
    }
}
const yearlyData = []; // per-year results
if(userInput){
  let currentSavings = +userInput.currentSavings;
  const yearlyContribution = +userInput.yearlyContribution;
  const expectedReturn = +userInput.expectedReturn / 100;
  const duration = +userInput.duration;

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }
}
  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} />
      {userInput && (
        <Table
          yearlyData={yearlyData}
          initialInvestment={+userInput.currentSavings}
        />
      )}
      {!userInput && <p className="message">No Input Data Available</p>}
    </div>
  );
}

export default App;
