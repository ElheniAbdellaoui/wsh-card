import "./App.css";
import React, { Component } from "react";
import CounterCard from "./components/CounterCard";

export default class App extends Component {
  state = {
    greet: true,

    isvisible: true,
  };

  handlgreet = () => {
    this.setState({ greet: !this.state.greet });
  };

  handlhide = () => {
    this.setState({ isvisible: !this.state.isvisible });
  };

  render() {
    return (
      <div className="App">
        {this.state.isvisible ? (
          <div>
            <CounterCard />
          </div>
        ) : null}
        <hr />
        <button
          onClick={() => this.handlhide()}
          style={{
            backgroundColor: "green",
            borderRadius: "10px",
            width: "70px",
          }}
        >
          {this.state.isvisible ? "hide" : "show"}
        </button>
      </div>
    );
  }
}
