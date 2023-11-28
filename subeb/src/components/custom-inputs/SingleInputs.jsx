import React from 'react';

import "../census/census.css";

const SingleInputs = ({inputRefs, digits, setDigits}) => {
  
    const handleChange = (index, value) => {
      const newDigits = [...digits];
      
      // Allow only one digit in the last input
      if (index === newDigits.length - 1) {
        newDigits[index] = value.slice(0, 1);
      } else {
        newDigits[index] = value;
      }
      
      setDigits(newDigits);
  
      // Move focus to the next input
      if (index < inputRefs.length - 1 && value !== '') {
        inputRefs[index + 1].current.focus();
      }
    };
  
    const handleKeyDown = (index, event) => {
      if (event.key === "Backspace" && index > 0 && digits[index] === "") {
        // Move focus to the previous input on backspace if the current input is empty
        inputRefs[index - 1].current.focus();
      }
    };

  return (
    <div>
    {digits && digits.map((digit, index) => (
      <td className='single-inputs_td' key={index}>
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={inputRefs[index]}
        />
      </td>
    ))}
    </div>
  )
}

export default SingleInputs