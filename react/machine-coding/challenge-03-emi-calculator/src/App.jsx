import { useEffect, useState } from "react";

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

  function calculateEmi() {
    let principal = data.totalItemAmount - data.downPayment;
    let interest = data.interest / 100;
    let tenure = data.tenure;

    const emi =
      (principal * interest * (1 + interest) ** tenure) /
      (1 + interest) ** (tenure - 1);

    const totalInterestAmount = +(emi * tenure).toFixed(2);
    const totalPayableLoan = principal + totalInterestAmount;

    console.log({
      principal,
      interest,
      tenure,
      emi,
      totalInterestAmount,
      totalPayableLoan,
    });

    setData({
      ...data,
      emi,
      totalInterestAmount,
      totalPayableLoan,
    });
  }

  useEffect(() => {
    if (
      data.totalItemAmount > 0 &&
      data.downPayment > 0 &&
      data.downPayment <= data.totalItemAmount
    ) {
      calculateEmi();
    }
  }, [
    data.totalItemAmount,
    data.downPayment,
    data.processingFee,
    data.downPayment,
    data.tenure,
    data.interest,
  ]);

  return (
    <main>
      <h2>EMI Calculator (INR)</h2>
      <div className="emi__cal">
        <div className="calculator">
          <div className="item">
            <label htmlFor="totalItemAmount">Total Item Amount</label>
            <input
              id="totalItemAmount"
              type="number"
              min={0}
              placeholder=""
              value={data.totalItemAmount}
              onChange={(e) =>
                setData({ ...data, totalItemAmount: e.target.value })
              }
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
              max={100}
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
              max={100}
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
              placeholder="0"
              value={data.downPayment}
              onChange={(e) =>
                setData({ ...data, downPayment: e.target.value })
              }
            />
          </div>

          {/* <div className="slider">
            <span className="min">0</span>
            <input
              id="downPayment"
              type="range"
              min={0}
              // max={data.totalItemAmount}
              step={1}
              placeholder=""
              value={data.downPayment}
              onChange={(e) =>
                setData({ ...data, downPayment: e.target.value })
              }
            />
            <span className="max">{data.totalItemAmount}</span>
          </div> */}

          <div className="item">
            <label htmlFor="emi">Tenure</label>
            <input
              id="emi"
              type="number"
              min={1}
              max={10}
              placeholder=""
              value={data.tenure}
              onChange={(e) => setData({ ...data, tenure: e.target.value })}
            />
          </div>

          {/* <div className="item">
            <label htmlFor="emi">EMI</label>
            <input
              id="emi"
              type="number"
              min={0}
              placeholder=""
              value={data.emi}
              onChange={(e) => setData({ ...data, emi: e.target.value })}
            />
          </div> */}
        </div>
        <div className="result">
          <div className="result__item">
            <p>Loan Amount: </p>
            <span className="result__number">{data.loanAmount}</span>
          </div>
          <div className="result__item">
            <p>Total Interest Amount: </p>
            <span className="result__number">{data.totalInterestAmount}</span>
          </div>
          <div className="result__item">
            <p>Total Payable Loan Amount: </p>
            <span className="result__number">{data.totalPayableLoan}</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
