import React, { useState } from "react";
import styles from "./Form.module.css";
import Buttons from "./Buttons";

const Form = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      currentSavings === "" ||
      yearlyContribution === "" ||
      expectedReturn === "" ||
      duration === ""
    ) {
      alert("please enter all required data");
      return;
    }

    let userInput = {
      currentSavings:currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    };

    props.onCalculate(userInput);
  };

  const resetHandler = () => {

    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");

    let userInput = '';

    props.onCalculate(userInput);
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) => setCurrentSavings(e.target.value)}
            type="number"
            id="current-savings"
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) => setYearlyContribution(e.target.value)}
            type="number"
            id="yearly-contribution"
            value={yearlyContribution}
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) => setExpectedReturn(e.target.value)}
            type="number"
            id="expected-return"
            value={expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => setDuration(e.target.value)}
            type="number"
            id="duration"
            value={duration}
          />
        </p>
      </div>
      <Buttons onSubmit={formSubmitHandler}  onReset={resetHandler} />
    </form>
  );
};

export default Form;
