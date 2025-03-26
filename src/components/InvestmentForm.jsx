import React, { useState } from 'react'
import { calculateInvestmentResults } from '../util/investment'

function InvestmentForm({ onCalculate }) {
  const [initialInvestment, setInitialInvestment] = useState('')
  const [annualInvestment, setAnnualInvestment] = useState('')
  const [expectedReturn, setExpectedReturn] = useState('')
  const [duration, setDuration] = useState('')

  const calculateHandler = (event) => {
    event.preventDefault()
    const calculatedResults = calculateInvestmentResults({
      initialInvestment: +initialInvestment,
      annualInvestment: +annualInvestment,
      expectedReturn: +expectedReturn,
      duration: +duration,
    })
    onCalculate(calculatedResults, +initialInvestment, +annualInvestment)
  }

  return (
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
  )
}

export default InvestmentForm
