import React from "react";

export const Result = ({ result, calc }) => {
  return (
    <div className="total">
      {result ? (
        <span>({result > 10 ** 4 ? result.toExponential(1) : result})</span>
      ) : (
        ""
      )}{" "}
      {calc > 10 ** 10 ? Number(calc).toExponential(2) : calc || "0"}
    </div>
  );
};
