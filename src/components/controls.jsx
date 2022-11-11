import React from "react";

export const Controls = ({ calc, setCalc, setResult }) => {
  const operators = ["/", "*", "-", "+"];

  // updateds calc state
  const updateCalc = (value) => {
    // checks if operator was last entered to calc
    if (
      (operators.includes(value) && calc === "") ||
      (value === "." && calc.includes(value)) ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
    // if no operator, add new value to calc
    if (!operators.includes(value)) {
      setResult(eval(calc + value));
    }
  };

  // calculates total
  const calculate = () => {
    // checks if total is above 10 power of 9
    if (calc > 10 ** 9) {
      setCalc(eval(calc).toExponential(2).toString());
    } else {
      setCalc(eval(calc).toString());
    }
  };

  // deletes last entered value
  const deleteLastDigit = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  // clears calc and result states
  const clearResult = () => {
    setCalc("");
    setResult("");
  };

  // maps out 1 - 9 digit buttons using loop
  const calcDigits = () => {
    const digits = [];
    for (let i = 9; i > 0; i--) {
      digits.push(
        <button className="digits-btn" onClick={() => updateCalc(i)} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="controls">
      <div className="operators">
        {operators.map((operator, i) => {
          return (
            <button onClick={() => updateCalc(operator)} key={i}>
              {operator}
            </button>
          );
        })}
        <button onClick={calculate}>=</button>
      </div>
      <div className="all-digits">
        <div className="digits">
          <button className="digits-btn special" onClick={deleteLastDigit}>
            DEL
          </button>
          <button
            className="digits-btn special"
            onClick={() => updateCalc("(")}
          >
            (
          </button>
          <button
            className="digits-btn special"
            onClick={() => updateCalc(")")}
          >
            )
          </button>
          {calcDigits()}
        </div>
        <div className="other-digits">
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={clearResult}>C</button>
        </div>
      </div>
    </div>
  );
};
