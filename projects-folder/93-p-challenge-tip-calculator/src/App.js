import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState('');

  const [yourReviewPercentage, setYourReviewPercentage] = useState(0);

  const [spouseReviewPercentage, setSpouseReviewPercentage] = useState(0);

  const totalTip = bill * yourReviewPercentage + bill * spouseReviewPercentage;

  function handleCalculatePercentage(id, percentage) {
    if (id == "your-review") setYourReviewPercentage(Number(percentage));
    if (id == "spouse-review") setSpouseReviewPercentage(Number(percentage));
  }

  function handleReset() {
    setBill('');
    setYourReviewPercentage(0);
    setSpouseReviewPercentage(0);
  }

  return (
    <div>
      <Bill bill={bill} onBill={setBill} />

      <Review
        text="How did you like the service?"
        id="your-review"
        percentageValue={yourReviewPercentage}
        onCalculatePercentage={handleCalculatePercentage}
      />

      <Review
        text="How did your spouse like the service?"
        id="spouse-review"
        percentageValue={spouseReviewPercentage}
        onCalculatePercentage={handleCalculatePercentage}
      />

      <Output bill={bill} totalTip={totalTip} />

      <Reset onReset={handleReset} />
    </div>
  );
}

function Bill({ bill, onBill }) {
  return (
    <>
      <div>
        <label>How much was the bill?</label>
        <input type="text" placeholder="Enter Bill Amount" value={bill} onChange={(e) => onBill(Number(e.target.value))} />
      </div>
    </>
  );
}

function Review({ text, percentageValue, id, onCalculatePercentage }) {
  return (
    <div>
      <label>{text}</label>

      <select id={id} value={percentageValue} onChange={(e) => onCalculatePercentage(e.target.id, e.target.value)}>
        <option value={0} key="">
          Dissatisfied (0%)
        </option>
        <option value={5 / 100} key="">
          It was okay (5%)
        </option>
        <option value={10 / 100} key="">
          It was good (10%)
        </option>
        <option value={20 / 100} key="">
          Absolutely amazing (20%)
        </option>
      </select>
    </div>
  );
}

function Output({ bill, totalTip }) {
  return (
    <p>
      Your total bill (Bill + Tip) = &#8377;{bill + totalTip} (&#8377;{+bill} + &#8377;{totalTip}){" "} {/* + bill is used to convert '' (empty string) to number 0 */}
    </p>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
