import "../css/Recipe.css";
import { connect } from "react-redux";
import ApiKey from "./ApiKey";

import React from "react";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoaded: false,
      error: "",
    };

    this.getRecipe = this.getRecipe.bind(this);
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe() {
    fetch(
      "https://api.spoonacular.com/recipes/" +
        this.props.info.id +
        "/information?" +
        ApiKey()
    )
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            data: data,
            isLoaded: true,
            error: "",
          });
        },
        () => {
          this.setState({
            isLoaded: true,
            error: "error",
          });
        }
      );
  }

  render() {
    const { data, isLoaded, error } = this.state;
    if (isLoaded) {
      if (!error) {
        return (
          <div className="recipe-container">
            <div className="recipe-header">
              <h2>{this.props.info.title}</h2>
              {<img src={data.image} />}
              <div
                className="recipe-summary"
                dangerouslySetInnerHTML={{ __html: data.summary }}
              />
            </div>
          </div>
        );
      } else {
        return (
          <div className="recipe-container">
            <p>{error}</p>
          </div>
        );
      }
    } else {
      return (
        <div className="recipe-container">
          <p>Loading...</p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    mainState: state.mainState,
    info: state.chosenRecipe,
  };
}

const mapDispatchToProps = {};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default MainContainer;
