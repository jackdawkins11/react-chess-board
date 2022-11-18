

class ChessBoard extends React.Component {

	constructor(props){
		super(props)
	
		this.state = { pieces: [
			["R", "N", "B", "Q", "K", "B", "N", "R"],
			["P", "P", "P", "P", "P", "P", "P", "P"],
			[" ", " ", " ", " ", " ", " ", " ", " "], 
			[" ", " ", " ", " ", " ", " ", " ", " "], 
			[" ", " ", " ", " ", " ", " ", " ", " "], 
			[" ", " ", " ", " ", " ", " ", " ", " "], 
			["p", "p", "p", "p", "p", "p", "p", "p"],
			["r", "n", "b", "q", "k", "b", "n", "r"]
		], selected: null, turn: "w" }
	}

	render(){
		return <div> {this.state.pieces.slice().reverse().map( (row, rowIdx) => {
			return <div key={rowIdx}> { row.map( ( piece, colIdx ) => {
				return <button key={colIdx} onClick={ (e) => {
					console.log( this.state )
					if( this.state.selected == null ){
						this.setState( {selected: [colIdx, 7 - rowIdx  ] } )
					}else{
						pieces = this.state.pieces.slice()
						sIdx = this.state.selected
						pieces[ 7 - rowIdx ][ colIdx ] = pieces[ sIdx[ 1 ] ][ sIdx[ 0 ] ]
						pieces[ sIdx[ 1 ] ][ sIdx[ 0 ] ] = " "
						this.setState( {selected: null, pieces: pieces, turn: this.state.turn == "w" ? "b" : "w" } )
					}
				}} style={{outline: "none", border: "none", width: "50px", height: "50px", background: (rowIdx + colIdx) % 2 == 0 ? "gainsboro" : "darkGrey" }} >
					{piece}</button>
			} ) } </div>
		} ) }</div>
	}
}

ReactDOM.createRoot(document.getElementById('root')).render(<ChessBoard />);
