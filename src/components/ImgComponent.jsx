import puppyImg from "../dog.jpeg";
import { Component } from "react";

class ImgComponent extends Component {
  render() {
    return (
      <img src={puppyImg} alt="강아지" />
    )
  }
}

// function ImgComponent() {  
//   return (
//     <img src="/dog.jpeg" alt="강아지" />
//   )
// }

export default ImgComponent;