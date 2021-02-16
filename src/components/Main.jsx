import "../css/App.css";
import {connect} from "react-redux"

import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <div className="App-main">
        <p>{this.props.mainState}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mainState: state.mainState,
  };
}

const mapDispatchToProps = {
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
