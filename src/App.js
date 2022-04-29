import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState([0]);
  console.log(counter);

  return (
    <div className="App">
      <h1>Counter v2</h1>
      {counter.length < 3 && (
        <button
          onClick={() => {
            const newCounter = [...counter];
            newCounter.push(0);
            setCounter(newCounter);
          }}
        >
          Add counter
        </button>
      )}

      <section>
        {counter.map((item, index) => {
          return (
            <div key={index} className="counters">
              <div className="controls">
                {counter[index] > 0 && (
                  <button
                    onClick={() => {
                      const newTab = [...counter];
                      newTab[index] = counter[index] - 1;
                      setCounter(newTab);
                    }}
                  >
                    -
                  </button>
                )}

                <span>{counter[index]}</span>
                {counter[index] < 10 && (
                  <button
                    onClick={() => {
                      const newTab = [...counter];
                      newTab[index] = counter[index] + 1;
                      setCounter(newTab);
                    }}
                  >
                    +
                  </button>
                )}
              </div>
              <button
                onClick={() => {
                  const newTab = [...counter];
                  newTab[index] = 0;
                  setCounter(newTab);
                }}
              >
                Reset
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
