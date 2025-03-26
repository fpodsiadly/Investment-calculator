import { formatter } from '../util/investment'

function ResultsTable({ results, initialInvestment, annualInvestment }) {
  if (results.length === 0) {
    return null
  }

  return (
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
  )
}

export default ResultsTable
