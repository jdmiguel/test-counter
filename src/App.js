import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      errorMessageShowed: false
    };
  }

  incrementCounterHandler = () => {
    if (this.state.counter === 0 && this.state.errorMessageShowed) {
      this.setState({ errorMessageShowed: false });
    }

    this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCounterHandler = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.setState({ errorMessageShowed: true });
    }
  };

  render() {
    return (
      <main data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently: <span>{this.state.counter}</span>
        </h1>
        <div>
          <button
            data-test="increment-button"
            onClick={this.incrementCounterHandler}
          >
            Increment counter
          </button>
          <button
            data-test="decrease-button"
            onClick={this.decreaseCounterHandler}
          >
            Decrease counter
          </button>
        </div>
        {this.state.errorMessageShowed && (
          <p>It is not possible to go below cero</p>
        )}
      </main>
    );
  }
}

export default App;
