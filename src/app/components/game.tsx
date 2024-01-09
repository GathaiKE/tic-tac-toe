import { useState } from "react";


interface SquareProps{
    value:string|null
    onSquareClick:()=>void
}

const Square:React.FC<SquareProps>=({value,onSquareClick})=>{
    return (
        <button className="" onClick={onSquareClick}>{value}</button>
    )
}

const Board=()=>{
    const [xIsNext, setXToNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick=(i)=>{
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
            <div>
                <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
            </div>
        </>
    )
}