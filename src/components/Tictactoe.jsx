import React from "react";
import { useState } from "react";
import Cell  from "./Cell";
import './Tictactoe.css';
const Tictactoe = () => {
    const [turn,setTurn] = useState("X");
    const [cells,setCells] = useState(Array(9).fill(""));
    const [winner,setWinner] = useState()
    const [gameOver,setGameOver] = useState(true);
    const handleClick = (num)=>{
        if(cells[num]!==""){
            alert("Already clicked");
            return;
        }
        let squares = [...cells];
        if(turn=="X"){
            squares[num] = 'X'
            setTurn("O");
            
        }else{
            squares[num] = "O"
            setTurn("X")
        }
        checkWinner(squares);
        setCells(squares);
        console.log(squares);
    }
    const checkWinner = (squares)=>{
        let combos = {
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagonal:[
                [0,4,8],
                [2,4,6]
            ]
        }
        for(let combo in combos){
            combos[combo].forEach((pattern)=>{
                if(squares[pattern[0]]==""||
                squares[pattern[1]]==""||
                squares[pattern[2]]==""){
                    // move on
                }else if(squares[pattern[0]]==squares[pattern[1]]&&
                    squares[pattern[1]]==squares[pattern[2]]){
                        setWinner(squares[pattern[0]])
                        return;
                    }
            })
        }
    }
    const handleReset = ()=>{
        setWinner();
        setCells(Array(9).fill(""))
    }
  return (
    <div className="container" >
    <h1 className="heading">TIC TAC TOE</h1>
    <div className="turn" >Turn of: { turn }</div>
      <table>
        <tbody>
          <tr>
            <Cell cells={cells} handleClick={handleClick} num={0} />
            <Cell cells={cells} handleClick={handleClick} num={1} />
            <Cell cells={cells} handleClick={handleClick} num={2} />
          </tr>
          <tr>
            <Cell cells={cells} handleClick={handleClick} num={3} />
            <Cell cells={cells} handleClick={handleClick} num={4} />
            <Cell cells={cells} handleClick={handleClick} num={5} />
          </tr>
          <tr>
            <Cell cells={cells} handleClick={handleClick} num={6} />
            <Cell cells={cells} handleClick={handleClick} num={7} />
            <Cell cells={cells} handleClick={handleClick} num={8} />
          </tr>
        </tbody>
      </table>
      {(winner && gameOver) ? (<div className="winnerDiv" >
        <h3>Winner is {winner}</h3>
        <button onClick={()=>handleReset()} >Play again !</button>
        </div>) :  (<button className="resetbtn" onClick={()=>handleReset()} >Reset !</button>)}
    </div>
  );
};

export default Tictactoe;
