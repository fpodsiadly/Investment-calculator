import React, { useState } from 'react'
import './index.css'
import logo from './assets/investment-calculator-logo.png'
import { calculateInvestmentResults, formatter } from './util/investment'

function App() {
  const [initialInvestment, setInitialInvestment] = useState('')
  const [annualInvestment, setAnnualInvestment] = useState('')
  const [expectedReturn, setExpectedReturn] = useState('')
  const [duration, setDuration] = useState('')
  const [results, setResults] = useState([])

  const calculateHandler = (event) => {
    event.preventDefault()
    const calculatedResults = calculateInvestmentResults({
      initialInvestment: +initialInvestment,
      annualInvestment: +annualInvestment,
      expectedReturn: +expectedReturn,
      duration: +duration,
    })
    setResults(calculatedResults)
  }

  return (
    <div>
      <header id="header">
        <img src={logo} alt="Investment Calculator Logo" />
        <h1>Investment Calculator</h1>
      </header>
      <form id="user-input" onSubmit={calculateHandler}>
        <div className="input-group">
          <div>
            <label htmlFor="initial-investment">Initial Investment</label>
            <input
              type="number"
              id="initial-investment"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="annual-investment">Annual Investment</label>
            <input
              type="number"
              id="annual-investment"
              value={annualInvestment}
              onChange={(e) => setAnnualInvestment(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label htmlFor="expected-return">Expected Return (%)</label>
            <input
              type="number"
              id="expected-return"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="duration">Duration (Years)</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>
        <div className="center">
          <button type="submit">Calculate</button>
        </div>
      </form>
      {results.length > 0 && (
        <section id="result">
          <table id="result-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.year}>
                  <td>{result.year}</td>
                  <td>{formatter.format(result.valueEndOfYear)}</td>
                  <td>{formatter.format(result.interest)}</td>
                  <td>
                    {formatter.format(
                      result.valueEndOfYear -
                        initialInvestment -
                        annualInvestment * result.year
                    )}
                  </td>
                  <td>
                    {formatter.format(
                      result.valueEndOfYear -
                        (result.valueEndOfYear -
                          initialInvestment -
                          annualInvestment * result.year)
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  )
}

export default App
