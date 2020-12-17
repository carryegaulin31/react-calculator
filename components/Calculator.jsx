import React, { useState } from 'react'

export default () => {

  const [operation, setOperation] = useState('+')
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [answer, setAnswer] = useState('')

  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <input id="number1" type="text" name="number1" onChange={event => setNum1(event.target.value)} />
      <select id="operation" name="operation" onChange={event => setOperation(event.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select >
      <input id="number2" type="text" name="number2" onChange={event => setNum2(event.target.value)} />
      <input type="button" value="Click for answer" />
      <input id="answer" type="text" name="answer" />
    </div >
  )
}
