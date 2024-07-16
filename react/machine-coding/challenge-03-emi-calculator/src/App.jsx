import { useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState({
    totalItemAmount: 0,
    interest: 10, // in percentage
    processingFee: 1, // in percentage
    downPayment: 0, // without processing fee added
    loanAmount: 0,
    totalInterestAmount: 0,
    totalPayableLoan: 0,
    emi: 0,
    tenure: 1, // in year
  });
  return (
    <main>
      <h2>EMI Calculator (INR)</h2>
      <div className="calculator">
        <div className="item">
          <label htmlFor="totalItemAmount">Total Item Amount</label>
          <input
            id="totalItemAmount"
            type="number"
            min={0}
            placeholder=""
            value={data.assetAmount}
            onChange={(e) => setData({ ...data, assetAmount: e.target.value })}
          />
        </div>

        <div className="item">
          <label htmlFor="interest">
            Interest <span>(in %)</span>
          </label>
          <input
            id="interest"
            type="number"
            min={0}
            placeholder=""
            value={data.interest}
            onChange={(e) => setData({ ...data, interest: e.target.value })}
          />
        </div>

        <div className="item">
          <label htmlFor="processingFee">
            Processing Fee <span>(in %)</span>
          </label>
          <input
            id="processingFee"
            type="number"
            min={0}
            placeholder=""
            value={data.processingFee}
            onChange={(e) =>
              setData({ ...data, processingFee: e.target.value })
            }
          />
        </div>

        <div className="item">
          <label htmlFor="downPayment">Down Payment</label>
          <input
            id="downPayment"
            type="number"
            min={0}
            placeholder=""
            value={data.downPayment}
            onChange={(e) => setData({ ...data, downPayment: e.target.value })}
          />
        </div>

        <div className="slider">
          <input
            id="downPayment"
            type="range"
            min={0}
            max={data.assetAmount}
            step={1}
            placeholder=""
            value={data.downPayment}
            onChange={(e) => setData({ ...data, downPayment: e.target.value })}
          />
        </div>

        <div className="item">
          <label htmlFor="emi">EMI</label>
          <input
            id="emi"
            type="number"
            min={0}
            placeholder=""
            value={data.emi}
            onChange={(e) => setData({ ...data, emi: e.target.value })}
          />
        </div>

        <div className="result">
          <div className="result__item">
            <p>Loan Amount: </p>
            <span className="result__number">0000</span>
          </div>
          <div className="result__item">
            <p>Total Interest Amount: </p>
            <span className="result__number">0000</span>
          </div>
          <div className="result__item">
            <p>Total Payable Loan Amount: </p>
            <span className="result__number">0000</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
