import React, {useState} from 'react'
import '../styles/calculator.css'

const Calculate = () => {

    const [calculation, setCalculation] = useState('')
        const num1 = document.getElementById('num1').value
        const num2 = document.getElementById('num2').value
        const operator = document.getElementById('operator').value

            switch(operator) {
                case '+':
                    setCalculation(num1 + num2)
                    break
                case '-':
                    setCalculation(num1 - num2)
                    break
                case '*':
                    setCalculation(num1 * num2)
                    break
                case '/':
                    setCalculation(num1 / num2)
                    break
                default:
                    setCalculation(0)
            }
            if(!isNaN(calculation)) {
                return (
                    <>
                    <div className="calculator">
                        <input type="number" id="num1" />
                        <select id="operator">
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select>
                        <input type="number" id="num2" />
                        <button onClick={Calculate}>Calculate</button>
                        <input type="number" defaultValue={calculation} disabled />
                    </div>
                    </>
                )
            
            } else {
                return(
                    Error('Input was not a valid number')
                )
            }
    

}


export default Calculate