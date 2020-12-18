import React, { useState } from 'react'

export default () => {
  const [operation, setOperation] = useState('+')
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [answer, setAnswer] = useState('')
  const [warning, setWarning] = useState('')
  const updateAnswer = () => {
    if (Number(num1) && Number(num2)) {
      if (warning) setWarning('')
      switch (operation) {
        case '+':
          setAnswer(Number(num1) + Number(num2))
          break
        case '-':
          setAnswer(Number(num1) - Number(num2))
          break
        case '*':
          setAnswer(Number(num1) * Number(num2))
          break
        case '/':
          setAnswer(Number(num1) / Number(num2))
          break
        default:
      }
    } else {
      setAnswer('')
      setWarning('Please provide a valid number for both operands')
    }
  }

  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <input className="number1" type="text" name="number1" onChange={event => setNum1(event.target.value)} />
      <select className="operation" name="operation" onChange={event => setOperation(event.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input className="number2" type="text" name="number2" onChange={event => setNum2(event.target.value)} />
      <input className="click" type="button" value="=" onClick={updateAnswer} />
      <input className="answer" type="text" name="answer" defaultValue={answer} disabled />
      <div className="warning">{warning ? `${warning}` : null}</div>
    </div>
  )
}
