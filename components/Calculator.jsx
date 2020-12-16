import React, { useState } from 'react'

export default () => {
  const [valid, setvalid] = useState('')
  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <form>
      <input type="text" name="number1" ></input>
      <select id="operation" onchange="operator()">
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>*</option>
        <option value='/'></option>
      </select>
      <input type="text" name="number2" ></input>
      <span> = </span>
      <input type="button" value="Click for answer" onclick="calculate()"></input> onChange={event => setValid(`Please provide a valid number for both operands' ${event.target.value}`)} />
      <div className="calculate">Figure out the calculator</div>
      </form>
    </div>
  )
}