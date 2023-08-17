import './App.css';
import Square from './Squares';
import { v4 } from 'uuid'
import { useState } from 'react';

function App() {
	let x = <i class="fa-solid fa-x x-icon"></i>;
	let o = <i class="fa-regular fa-circle o-icon"></i>;

	const [turn,setTurn] = useState("x");

	const [xStatus,changeX] = useState([]);
	const [oStatus,changeO] = useState([]);

	const l = [1,2,3,4,5,6,7,8,9]

	const allPossibilities = [
		[1,2,3],[4,5,6],[7,8,9],
		[1,4,7],[2,5,8],[3,6,9],
		[1,5,9],[3,5,7]
	]

	return (
		<>
			<h1>Tic-Tac-Toe</h1>
			<div className="status">Player X's turn</div>
			<div className="board-container">
				<div className="board">
					{l.map(e => {
						return <Square key={v4()} id={e} turn={turn} setTurn={setTurn}></Square>
					})}
				</div>
			</div>
			<button className="restart-button">Restart</button>
		</>
	);
}

export default App;
