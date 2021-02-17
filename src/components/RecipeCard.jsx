import React from "react";
import { renderRecipe, changeChosenRecipe } from "../actions";
import { connect } from "react-redux";
import "../css/RecipeCard.css";

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeChosenRecipe(
      this.props.items.id,
      this.props.items.title,
      this.props.items.img
    );
    this.props.renderRecipe();
  }

  render() {
    console.log(this.props);
    return (
      <div className="recipe-card" onClick={this.handleClick}>
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
  renderRecipe,
  changeChosenRecipe,
};

const RecipeCards = connect(mapStateToProps, mapDispatchToProps)(RecipeCard);

export default RecipeCards;
