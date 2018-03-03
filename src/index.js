import React from "react";
import ReactDOM, { render } from "react-dom";

class Button extends React.Component {
  /*handleClick = () => {
    this.props.onClickFunction;
  };*/

  render() {
    return (
      <button
        onClick={() => this.props.onClickFunction(this.props.incrementValue)}
      >
        +{this.props.incrementValue}
      </button>
    );
  }
}

const Result = props => {
  return <div>{props.counter}</div>;
};

class App extends React.Component {
  state = { counter: 0 };

  incrementCounter = incrementValue => {
    this.setState(prevState => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={2} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
