import { useEffect, useState } from "react";

import { tenures } from "./libs/constants";

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
    tenure: 12, // in months
  });

  function calculateEmi() {
    if (data.totalItemAmount > 0 && data.downPayment <= data.totalItemAmount) {
      let principal = data.totalItemAmount - data.downPayment;
      let interest = data.interest / 100;
      let monthlyInterest = +(interest / 12).toFixed(5);
      console.log({
        Annual: interest,
        Monthly: monthlyInterest,
      });
      let tenure = data.tenure;

      let emi =
        (principal * monthlyInterest * (1 + monthlyInterest) ** tenure) /
        ((1 + monthlyInterest) ** tenure - 1);
      // let emi =
      //   (principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure)) /
      //   (Math.pow(1 + monthlyInterest, tenure) - 1);
      emi = +emi.toFixed(2);
      console.log("EMI", emi);
      const totalPayableLoan = emi * tenure;
      const totalInterestAmount = totalPayableLoan - principal;

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
        loanAmount: principal,
      });
    }
  }

  useEffect(() => {
    calculateEmi();
  }, [
    data.totalItemAmount,
    data.processingFee,
    data.downPayment,
    data.tenure,
    data.interest,
  ]);

  return (
    <main>
      <h2>EMI Calculator (INR)</h2>
      <div className="emi__cal">
        {/* calculator */}
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
                setData({ ...data, totalItemAmount: +e.target.value })
              }
            />
          </div>

          <div className="group">
            <div className="item">
              <label htmlFor="interest">
                Interest <span className="subLabel">(%)</span>
              </label>
              <input
                id="interest"
                type="number"
                min={1}
                max={100}
                placeholder=""
                value={data.interest}
                onChange={(e) => {
                  let value = +e.target.value;

                  if (value < 1) {
                    value = 1;
                  } else if (value >= 100) {
                    value = 100;
                  }
                  setData({ ...data, interest: value });
                }}
              />
            </div>

            <div className="item">
              <label htmlFor="processingFee">
                Processing Fee <span className="subLabel">(%)</span>
              </label>
              <input
                id="processingFee"
                type="number"
                min={1}
                max={100}
                placeholder=""
                value={data.processingFee}
                onChange={(e) => {
                  let value = +e.target.value >= 100 ? 100 : +e.target.value;
                  setData({ ...data, processingFee: value });
                }}
              />
            </div>
          </div>

          <div className="item">
            <label htmlFor="downPayment">Down Payment</label>
            <input
              id="downPayment"
              type="number"
              min={0}
              placeholder="0"
              value={data.downPayment}
              onChange={(e) => {
                let value =
                  +e.target.value >= data.totalItemAmount
                    ? data.totalItemAmount
                    : +e.target.value;

                setData({ ...data, downPayment: value });
              }}
            />
          </div>

          <div className="slider">
            <span className="min">0</span>
            <input
              id="downPayment"
              type="range"
              min={0}
              max={data.totalItemAmount}
              value={data.downPayment}
              onChange={(e) =>
                setData({ ...data, downPayment: +e.target.value })
              }
              // step={1}
              placeholder=""
            />

            <span className="max">{data.totalItemAmount || 0}</span>
          </div>

          <div className="item">
            <label>
              Tenure <span className="subLabel">(months)</span>
            </label>
            <div className="tenures">
              {tenures.map((value) => (
                <button
                  key={value}
                  className={+value === data.tenure ? "selected" : ""}
                  onClick={(e) => setData({ ...data, tenure: +value })}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* results */}
        <div className="result">
          <h4>Based on your provided information</h4>
          <div className="result__item">
            <p>Loan Amount: </p>
            <div className="result__number">{data.loanAmount.toFixed(2)}</div>
          </div>
          <div className="result__item">
            <p>Total Interest Amount: </p>
            <div className="result__number">
              {data.totalInterestAmount.toFixed(2)}
            </div>
          </div>
          <div className="result__item">
            <p>Total Payable Loan Amount: </p>
            <div className="result__number">
              {data.totalPayableLoan.toFixed(2)}
            </div>
          </div>
          <div className="result__item emi">
            <p>EMI: </p>
            <div className="result__number">{data.emi}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
