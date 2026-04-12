import React from 'react';

import "./census-table.css";

const RadioOptions = ({radioOptions, radioCheckbox}) => {


  return (
    <div className='radio-div no-of_children-table'>
        <table>
            <thead>
            {radioOptions.map((item, idx) => {
                return (
                <tr key={idx}>
                    <td>{item.label}</td>
                    <td className={radioCheckbox ? "radio-checkbox" : undefined}>{item.input}</td>
                </tr>
                )
            })}
            </thead>
        </table>
    </div>
  )
}

export default RadioOptions