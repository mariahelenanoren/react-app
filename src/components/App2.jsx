import React from 'react';
import '../css/App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { connect } from "react-redux";
import { sayHello, sayGoodbye } from "../actions"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.searchValue = ""
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    this.searchValue = event.target.value
  }

  render() {
    if (this.props.greeting === "Nice to see you") {
      return (
        <div>
          <h1>{this.props.greeting}</h1>
          <button onClick={() => this.props.sayHello("goodbye")}>
            Switch
          </button>
        </div>
      )
    } else {
      return <h1>{this.props.greeting}</h1>;
    }

/*     return (
      <div>
        <h1>{this.props.greeting}</h1>
        <input onChange={this.handleInput} type="text" />
        <button onClick={ () => 
          this.props.sayHello(this.searchValue)
        }
        >Exit Geod</button>
        <button onClick={this.props.sayGoodbye}>Click Me!</button>
      </div>
    ); */
  }
}

function mapStateToProps(state) {
  console.log(state.greeting)
  return {
    greeting: state.greeting
  }
}

/* const mapStateToProps = (state) => ({
  greeting: state.greeting,
}); */

const mapDispatchToProps = {
  sayHello,
  sayGoodbye,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
