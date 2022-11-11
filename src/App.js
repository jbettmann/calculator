import { useState } from "react";
import { Controls } from "./components/controls";
import { Result } from "./components/result";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <div className="calculator">
        <Result calc={calc} result={result} />
        <Controls calc={calc} setCalc={setCalc} setResult={setResult} />
      </div>
    </div>
  );
}

export default App;
