import "../css/App.css";
import { connect } from "react-redux";
import React from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Recipe from "./Recipe";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.mainState === "search") {
      return <Search />;
    } else if (this.props.mainState === "searchResults") {
      return <SearchResults />;
    } else if (this.props.mainState === "recipe") {
      return <Recipe />;
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
  console.log(state);
  return {
    mainState: state.mainState,
  };
}

const mapDispatchToProps = {};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
