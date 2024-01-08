// import React from 'react'

const Square =({ value })=>{

    function handleClick() {
        console.log('tic tac toe');
    }

    return (
        <button className="border m-3 p-3 " onClick={handleClick}>{value}</button>
    )
}

const game = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
        <div className=" grid grid-cols-3">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    </div>
  )
}

export default game
