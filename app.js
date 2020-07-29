// require("./base");
// for (let i of [1, 2, 3, 4, 5, 7]) {
//   console.log(`i is ${i} now`);
// }
// console.log("Hello Joy-React");
import { JoyReact, Component } from "./JoyReact";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>
          Hello <strong>U </strong>
        </span>
        <span>Joy </span>
        <span>React </span>
        {'sk2'}
      </div>
    );
  }
}

let a = <MyComponent name="mpt" id="mpt">
  <div>5566</div>
</MyComponent>;

JoyReact.render(a, document.querySelector('#app'));
