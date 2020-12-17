import React, { useState } from 'react'

export default () => {
  
  const [operation, setOperation] = useState('+')
  

  return (
    <div className="page">
      <div className="title">React Calculator</div>
      <input id="number1" type="text" name="number1" 
      <select id="operation" name="operation" 
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input id="number2" type="text" name="number2" 
      <input type="button" value="Click for answer" />
      <input id="answer" type="text" name="answer" />
    </div>
  )
}
