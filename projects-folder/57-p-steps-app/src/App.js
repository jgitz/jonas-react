import { useState } from "react"; /* 60-61-62 */

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];
{
  /* 57 */
}

function App() {
  // const step = 1; /* 57 */

  const [step, setStep] = useState(1); /* 60-61-62 */

  const [isOpen, setIsOpen] = useState(true) /* 63 set to toggle appearance of card of jsx view using conditional && rendering  */

  function handlePrevious() {
    // alert('previous')
    if (step > 1) {
      setStep((step) => {
        return step -1 
      }); /* 60-61-62 set handler function logic */
    }
  } /* 58 */

  function handleNext() {
    // alert('next') /* 58 */
    if (step < 3) {

      setStep((step) => {
        return step + 1
      }); /* 60-61-62 set handler function logic */
    }
  } /* 58 */

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>&times;</button > {/* 63 onClick attribute added to toggle isOpen state variable  */}

{/* 63 && conditional rendering is used to toggle appearance  */}
      {isOpen && <div className="steps">
        {" "}
        {/* 57 */}
        <div className="numbers">
          {" "}
          {/* 57 */}
          <div className={step >= 1 ? "active" : ""}>{step}</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <p className="message">{messages[step - 1]}</p> {/* 57 */}
        <div className="buttons">
          <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>
            Previous
          </button>{" "}
          {/* 58 onclick attribute added */}
          <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>
            Next
          </button>{" "}
          {/* 58 onclick attribute added */}
        </div>
      </div>}
    </>
  );
}

export default App;
