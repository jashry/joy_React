// require("./base");
// for (let i of [1, 2, 3, 4, 5, 7]) {
//   console.log(`i is ${i} now`);
// }
// console.log("Hello Joy-React");
import { JoyReact, Component } from "./JoyReact";

class Square extends Component {
  constructor(props){
    super(props)
    this.state = {
      value:null
    }
  }
  render(){
    return(
      <button className='square' onClick={()=> this.setState({value:3})}>
        {this.state.value?this.state.value:''}
      </button>
    )
  }
}

class Board extends Component {
  renderSquare(i){
    return <Square value={i} />
  }
  render(){
    return(
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}


class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>
          Hello <strong>U </strong>
        </span>
        <span>Joy </span>
        <span>React </span>
        'sk22'
        {this.children}
      </div>
    );
  }
}

let a = <Board />;

JoyReact.render(a, document.querySelector('#app'));
