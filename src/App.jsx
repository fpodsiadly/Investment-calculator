import React, { useState } from 'react'
import './index.css'
import Header from './components/Header'
import InvestmentForm from './components/InvestmentForm'
import ResultsTable from './components/ResultsTable'

function App() {
  const [results, setResults] = useState([])
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
  })

  const handleCalculate = (
    calculatedResults,
    initialInvestment,
    annualInvestment
  ) => {
    setResults(calculatedResults)
    setUserInput({
      initialInvestment,
      annualInvestment,
    })
  }

  return (
    <div>
      <Header />
      <InvestmentForm onCalculate={handleCalculate} />
      <ResultsTable
        results={results}
        initialInvestment={userInput.initialInvestment}
        annualInvestment={userInput.annualInvestment}
      />
    </div>
  )
}

export default App
