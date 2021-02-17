import React from "react";
import "../css/RecipeCard.css";

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="recipe-card">
        <img src={this.props.items.img} />
        <h1>{this.props.items.title}</h1>
      </div>
    );
  }
}

export default RecipeCard;
