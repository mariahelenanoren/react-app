import React from "react";
import { changeMainState, changeChosenRecipe } from "../actions";
import { connect } from "react-redux";
import "../css/RecipeCard.css";

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks() {
    this.props.changeChosenRecipe(
      this.props.items.id,
      this.props.items.title,
      this.props.items.img
    );
    this.props.changeMainState("recipe");
  }

  render() {
    return (
      <div className="recipe-card" onClick={this.handleClicks}>
        <img src={this.props.items.img} />
        <div className="recipe-name">
          <h2>{this.props.items.title}</h2>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mainState: state.mainState,
    searchTerm: state.searchTerm,
  };
}

const mapDispatchToProps = {
  changeMainState,
  changeChosenRecipe,
};

const RecipeCards = connect(mapStateToProps, mapDispatchToProps)(RecipeCard);

export default RecipeCards;
