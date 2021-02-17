import React from "react";
import "../css/RecipeCard.css"

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="recipe-card">
        <img src={this.props.img} />
        <h1>{this.props.title}</h1>
      </div>
    );
    }
}

export default RecipeCard;
