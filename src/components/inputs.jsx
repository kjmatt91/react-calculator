import React, {useState} from 'react';

const Input = () => {
    const [number, setNumber] = useState('')

    const updateNumber = event => {
        setNumber(event.target.value)
    }
    return (
        <div className="page">
            <p className="intro">Input your equation below</p>
            <input type="number" number="input" onChange={updateNumber}/>
            <div className="total">{number}</div>
        </div>
    )
    

}


export default Input