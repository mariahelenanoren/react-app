import "../css/App.css";
import store from "../app/store";
import React from "react";
import { connect } from "react-redux";
import { changeMainState } from "../actions";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const stateHistory = this.props.prevState + ", " + this.props.mainState;
    switch (stateHistory) {
      case "search, searchResults":
        this.props.changeMainState("search");
        break;
      case "search, recipe":
        this.props.changeMainState("search");
        break;
      case "recipe, searchResults":
        this.props.changeMainState("search");
        break;
      case "searchResults, recipe":
        this.props.changeMainState("searchResults");
        break;
      default:
        this.props.changeMainState("search");
        break;
    }
  }

  render() {
    return (
      <div className="App-header">
        <h1 className="App-name">
          <a href="./">Simply delicious</a>
        </h1>
        <button className="back-button" onMouseUp={this.handleClick}>
          Go back
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mainState: state.mainState,
    prevState: state.prevState,
  };
}

const mapDispatchToProps = {
  changeMainState,
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
