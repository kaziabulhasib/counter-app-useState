import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  return (
    <div id='parent-div'>
      <h1 style={{ textAlign: "center", color: "red" }}>
        Counter app using useState{" "}
      </h1>
      <p id='count-el'>count:{count}</p>
      <div className='inp-div'>
        <p>Step:</p>
        <input
          type='text'
          onChange={(e) => {
            setStep(Number(e.target.value));
            console.log(Number(e.target.value));
          }}
          value={step}
        />
      </div>

      <div className='btn-div'>
        <button
          onClick={() => {
            if (count < 100) {
              setCount(count + step);
            }
          }}>
          Increment
        </button>
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - step);
            }
          }}>
          Decrement
        </button>
        <button
          onClick={() => {
            setCount(0);
            setStep(1);
          }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
