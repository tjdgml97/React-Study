import { Component } from "react"; 

class MainHeader extends Component {
  constructor() {
    super();
    this.cas = true;
  }
  render() {
    return (
      <h1>Hello, {this.cas ? "캬하" : "노맛"} world!</h1>
    )
  }
}

export default MainHeader;
