import React from "react";
import "../css/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div class="App-wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    )
  }
}

export default App;