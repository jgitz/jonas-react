import "./App.css";
import { useState } from "react";
function App() {
  const currentDate = new Date();

  const [step, setStep] = useState(1);
  let [count, setCount] = useState(0);

  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  function handleMinusCount() {
    setCount((count) => {
      return count - 1 * step;
    });
  }

  function handlePlusCount() {
    setCount((count) => {
      return count + 1 * step;
    });
  }

  const futureDate = new Date(currentDate);

  futureDate.setDate(currentDate.getDate() + count);

  const descriptive_date = futureDate.toDateString();

  // const date = futureDate.getDate();
  // const day = futureDate.getDay();
  // const month = futureDate.getMonth();
  // const year = futureDate.getFullYear();

  // const day_array = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // const month_array = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

  // const descriptive_date = `${day_array[day]} ${month_array[month]} ${date} ${year}`;

  // const dateOptions = {weekday:'long', month:'long', day:'numeric', year: 'numeric'}

  // const descriptive_date = today.toLocaleDateString(undefined, dateOptions)

  // console.log(descriptive_date) //  Monday, April 8, 2024

  return (
    <>
      <div className="btn">
        <input value={step} onChange={handleStep} type="range" min={1} max={9} />
        <span>{step}</span>
      </div>
      <div className="btn">
        <button onClick={handleMinusCount}>-</button>
        <input
          value={count == 0 ? "" : count}
          type="number"
          onChange={(e) => {
            
            setCount(Number(e.target.value));
          }}
        />
        <button onClick={handlePlusCount}>+</button>
      </div>
      <p>
        {" "}
        {count !== 0 && `${Math.abs(count)} days`} {count < 0 && "ago"} {count == 0 && "Today"} {count > 0 && "from Today"}{" "}
        is {descriptive_date}{" "}
      </p>{" "}
      {/* ** instead of && you can use NESTED TERNARY (** but not preferred unless it is necessary) */}
      {(count !== 0 || step !== 1) &&
      
        <div style={{textAlign:'center'}}>
        <button onClick={handleReset}>Reset</button>
      </div>}
    </>
  );
}

export default App;
