import React, { useState } from "react";


interface SquareProps{
    value:string|null
    onSquareClick:()=>void
}

const Square:React.FC<SquareProps>=({value,onSquareClick})=>{
    return (
        <button className="" onClick={onSquareClick}>{value}</button>
    )
}

const Board:React.FC =()=>{
    const [xIsNext, setXToNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick=(i:any)=>{
        if(findWinner(squares)|| squares[i]){
            return
        }

        const nextSquares = squares.slice();

        (xIsNext)?nextSquares[i]='X':nextSquares[i]='O'

        setSquares(nextSquares);
        setXToNext(!xIsNext)
    }

    const winner = findWinner(squares);
    let status;
    winner?status='Winner: '+ winner: status= 'Next player is: '+(xIsNext?'x':'O')

    return (
        <>
            <div>{status}</div>
            <div className="grid grid-cols-3">
                <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
                <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
                <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
            </div>
        </>
    )
}
const findWinner=(squares:any[])=>{
    const lines =[
        [0,1,2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for(let i=0;i < lines.length;i++){
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }

    return null
}

export default Board