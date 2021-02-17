import "../css/App.css";
import { connect } from "react-redux";
import React from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Recipe from "./Recipe";
import { savePrevState } from "../actions";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.mainState !== prevProps) {
      this.props.savePrevState(prevProps.mainState);
    }
  }

  render() {
    if (this.props.mainState === "search") {
      return (
        <div className="App-main">
          <Search />
        </div>
      );
    } else if (this.props.mainState === "searchResults") {
      return (
        <div className="App-main">
          <SearchResults />
        </div>
      );
    } else if (this.props.mainState === "recipe") {
      return (
        <div className="App-main">
          <Recipe />
        </div>
      );
    } else {
      return (
        <div className="App-main">
          <h2>Something went wrong...</h2>
          <p>{this.props.mainState}</p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    mainState: state.mainState,
  };
}

const mapDispatchToProps = {
  savePrevState,
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
