import './App.css';
import { v4 } from 'uuid'
import { useState } from 'react';

function Square(props){
    return(
        <>
            <div className="cell" onClick={props.handleClick}>
            </div>
        </>
    );
};

function App() {
	const [turn,setTurn] = useState("x");
	const [squares,setSquares] = useState(Array(9).fill(null));

	const l = [1,2,3,4,5,6,7,8,9]

	const handleClick = (e,id) => {
		if (!squares.includes(id)){
			let a = squares;
			a[id-1] = id;
			setSquares(a);

			if(turn==="x"){
				setTurn('o');
			}

			else{
				setTurn("x");
			}

			console.log(turn);
		};
	}

	return (
		<>
			<h1>Tic-Tac-Toe</h1>
			<div className="status">Player X's turn</div>
			<div className="board-container">
				<div className="board">
					{l.map(id => {
						return <Square key={v4()} id={id} 
							handleClick={e => handleClick(e,id)} 
							setTurn={setTurn} turn={turn} > 
								
						</Square>
					})}
				</div>
			</div>
			<button className="restart-button">Restart</button>
		</>
	);
}

export default App;
