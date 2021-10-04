import React, {useState} from 'react'
import '../styles/calculator.css'

const Calculator = () => {

    const [calculation, setCalculation] = useState('')
    const calculate = () => {
            const num1 = document.getElementById("num1").value
            const num2 = document.getElementById("num2").value
            const operator = document.getElementById("operator").value
            if (Number(num1) && Number(num2)) {
        
                switch(operator){
                    case '+':
                        setCalculation(Number(num1) + Number(num2))
                        break
                    case '-':
                        setCalculation(Number(num1) - Number(num2))
                        break
                    case '*':
                        setCalculation(Number(num1) * Number(num2))
                        break
                    case '/':
                        setCalculation(Number(num1) / Number(num2))
                        break
                    default :
                    setCalculation(0)
                }
        } else {
            setCalculation('Confirm numbers are valid')
        }
        }

        return (
            <div>
            <br />
            <input type="number" id="num1" />
            <select id="operations">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" id="num2" />
            <input type="submit" value="=" onClick={calculate} />
            <input type="answer" defaultValue={calculation} disabled />
            </div>
        )
        }

export default Calculator