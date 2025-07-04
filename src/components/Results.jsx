import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

function Results({userInput}){
    const resultData = calculateInvestmentResults(userInput);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investemnt Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;  
                    const totalInvested = yearData.valueEndOfYear - totalInterest;
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Results;