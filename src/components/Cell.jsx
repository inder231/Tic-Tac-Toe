import React from 'react'
import './Tictactoe.css';
const Cell = ({handleClick,num,cells}) => {
  return (
    
    <td className='cell' onClick={()=>handleClick(num)} >{cells[num]}</td>
  )
}

export default Cell;