import './App.css';
import { v4 } from 'uuid'
import { useState } from 'react';

function Square(props){
    return(
        <>
            <div className="cell" onClick={props.handleClick} onclick>
				<i className={`fa-solid fa-${props.value} ${props.value}-icon ${props.lowOpacity}`}></i>
            </div>
        </>
    );
};

function App() {
	const [turn,setTurn] = useState("x");
	const [squares,setSquares] = useState(Array(9).fill(null));
	const [winner,setWinner] = useState("");
	const l = [1,2,3,4,5,6,7,8,9];
	
	const handleClick = (e,id) => {
		if(squares[id - 1]!==null || checkWinner(squares)){
			return;
		};

		let a = squares;
		a[id-1] = turn;
		setSquares(a);
		
		if(turn==="x"){
			setTurn('o');
		}
		
		else{
			setTurn("x");
		};

		const winner = checkWinner(squares);

		if(winner){
			setWinner(winner);
		};

	};

	function handleMouseOver(e,id){

	}
	
	
	const restartGame = () => {
		setSquares(Array(9).fill(null));
	};

	return (
		<>
			<h1>Tic-Tac-Toe</h1>
			<div className="status">Player X's turn</div>
			<div className="board-container">
				<div className="board">
					{l.map(id => {
						return (
							<Square key={v4()} value={squares[id-1]} lowOpacity=""
							handleClick={e => handleClick(e,id)}
							handleMouseOver={e => handleMouseOver(e,id)}></Square>
							)
						})}
				</div>
			</div>
			<p>{winner}</p>
			<button className="restart-button" onClick={restartGame}>Restart</button>
		</>
	);
};

const checkWinner = (squares) => {
	const allPosibilites = [
		[1,2,3],[4,5,6],
		[7,8,9],[1,5,9],
		[3,5,7],[1,4,7],
		[2,5,8],[3,6,9],
	];

	let winner = null

	allPosibilites.forEach(e => {
		const [a,b,c] = e;
		if(squares[a-1] && squares[a-1] === squares[b-1] && squares[a-1] === squares[c - 1]){
			winner = `${squares[a-1].toUpperCase()} Won!`
			return
		}
	});
	
	return winner;
};

export default App;
