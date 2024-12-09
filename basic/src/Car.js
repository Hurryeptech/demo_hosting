import React from "react";
export default class Car extends React.Component {
    
    render() {
        const {hello} = this.props
      return <h2>Hi, I am a Car!{hello.color}</h2>;
    }
  }

