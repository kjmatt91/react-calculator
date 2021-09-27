import React, {useState} from 'react';

const Calculate = () => {

    const [calculation, setCalculation] = useState('')
    const sum = () => {
        const field1 = document.getElementById('num1').value
        const field2 = document.getElementById('num2').value
        const operator = document.getElementById('operator').value

        if(!isNaN(total)) {
            switch(operator) {
                case '+':
                    setCalculation(field1) + (field2)
                    break
                case '-':
                    setCalculation(field1) - (field2)
                    break
                case '*':
                    setCalculation(field1) * (field2)
                    break
                case '/':
                    setCalculation(field1) / (field2)
                    break
                default:
                    setCalculation(0)
            }
        } else {
            setCalculation('Please Enter Valid Numbers')
        }
    }
    return (
        <div className="page">
            
        </div>
    )
    

}


export default Calculate