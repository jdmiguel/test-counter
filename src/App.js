import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  decreaseCounterHandler = () => {
    if(this.state.counter > 0){
      this.setState({counter: this.state.counter - 1});
    }
  }
  
  render(){
    return (
      <main data-test="component-app">
        <h1 data-test="counter-display">The counter is currently: <span>{this.state.counter}</span></h1>
        <div>
          <button 
            data-test="increment-button" 
            onClick={()=> this.setState({counter: this.state.counter + 1})}>
            Increment counter
          </button>
          <button 
            data-test="decrease-button" 
            onClick={this.decreaseCounterHandler}>
            Decrease counter
          </button>
        </div>
      </main>
    );
  }
}

export default App;
