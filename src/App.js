import './App.css';

function App() {
  return (
      <>
        <h1>Tic-Tac-Toe</h1>
        <div className="status">Player X's turn</div>
		<div className="board-container">
			<div className="board">
			<div className="cell"></div>
			<div className="cell"></div>
			<div className="cell"></div>
			<div className="cell"></div>
			<div className="cell"></div>
			<div className="cell"></div>
			<div className="cell"></div>
			<div className="cell"></div>
			<div className="cell"></div>
			</div>
		</div>
        <button className="restart-button" onclick="restartGame()">Restart</button>
      </>
  );
}

export default App;
