import "../css/App.css";
import {connect} from "react-redux"
import React from "react";
import Search from "./Search"
import SearchResults from "./SearchResults"


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    if (this.props.mainState === "search") {
      return(
        <Search />
      )
    }
    else if (this.props.mainState === "searchResults") {
      return (
        <SearchResults />
      )
    } else {
      return (
        <div className="App-main">
          <h1>hello</h1>
          <p>{this.props.mainState}</p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    mainState: state.mainState,
  };
}

const mapDispatchToProps = {
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
