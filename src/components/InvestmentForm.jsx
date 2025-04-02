import React, { useState } from 'react'
import { calculateInvestmentResults } from '../util/investment'

function InvestmentForm({ onCalculate }) {
  const [formData, setFormData] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 12,
  })

  const inputIsValid = formData.duration >= 1

  const updateFormData = (e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id.replace(/-([a-z])/g, (_, m) => m.toUpperCase())]: value,
    }))
  }

  const calculateHandler = (event) => {
    event.preventDefault()
    const calculatedResults = calculateInvestmentResults({
      initialInvestment: +formData.initialInvestment,
      annualInvestment: +formData.annualInvestment,
      expectedReturn: +formData.expectedReturn,
      duration: +formData.duration,
    })
    onCalculate(
      calculatedResults,
      +formData.initialInvestment,
      +formData.annualInvestment,
      inputIsValid
    )
  }

  return (
    <form id="user-input" onSubmit={calculateHandler}>
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            id="initial-investment"
            value={formData.initialInvestment}
            onChange={updateFormData}
          />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            value={formData.annualInvestment}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return (%)</label>
          <input
            type="number"
            id="expected-return"
            value={formData.expectedReturn}
            onChange={updateFormData}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration (Years)</label>
          <input
            type="number"
            id="duration"
            value={formData.duration}
            onChange={updateFormData}
          />
        </div>
      </div>
      <div className="center">
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero.</p>
        )}
        {inputIsValid && <button type="submit">Calculate</button>}
      </div>
    </form>
  )
}

export default InvestmentForm
