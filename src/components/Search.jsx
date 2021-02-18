import "../css/Search.css";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";
import ApiKey from "./ApiKey";
import { changeMainState, updateSearchTerm } from "../actions";

import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoaded: false,
      error: "",
    };

    this.randomRecipies = [];

    this.searchValue = "";
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
    this.saveRecipies = this.saveRecipies.bind(this);
  }

  handleInput(event) {
    this.searchValue = event.target.value;
  }

  handleSubmit() {
    this.props.updateSearchTerm(this.searchValue);
    this.props.changeMainState("searchResults");
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe() {
    fetch(
      "https://api.spoonacular.com/recipes/random?" + ApiKey() + "&number=3"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            data: data,
            isLoaded: true,
            error: "",
          });
          this.saveRecipies();
        },
        () => {
          this.setState({
            isLoaded: true,
            error: "error",
          });
        }
      );
  }

  saveRecipies() {
    if (this.state.isLoaded) {
      for (let i = 0; i < this.state.data.recipes.length; i++) {
        let recipe = {
          title: this.state.data.recipes[i].title,
          img: this.state.data.recipes[i].image,
          id: this.state.data.recipes[i].id,
        };
        this.randomRecipies.push(recipe);
      }
      this.setState({
        recipesHaveMounted: true,
      });
    }
  }

  render() {
    const { isLoaded, error, recipesHaveMounted } = this.state;

    if (isLoaded) {
      if (!error && recipesHaveMounted) {
        const recipeList = this.randomRecipies.map((recipes) => (
          <RecipeCard items={recipes} key={recipes.id} />
        ));

        return (
          <div className="search-page">
            <img
              className="hero"
              src="https://res.cloudinary.com/grohealth/image/upload/c_fill,f_auto,fl_lossy,h_650,q_auto,w_1085,x_0,y_0/v1583843120/DCUK/Content/Surprisingly-High-Carb-Food.png"
            />
            <div className="call-to-action">
              <h2>Your new favorite recipe is just one click away!</h2>
              <div className="search-container">
                <input type="text" onChange={this.handleInput} />
                <button onClick={this.handleSubmit}>Search</button>
              </div>
            </div>
            <div className="recipe-list">{recipeList}</div>
          </div>
        );
      } else {
        return (
          <div className="search-page">
            <img
              className="hero"
              src="https://res.cloudinary.com/grohealth/image/upload/c_fill,f_auto,fl_lossy,h_650,q_auto,w_1085,x_0,y_0/v1583843120/DCUK/Content/Surprisingly-High-Carb-Food.png"
            />
            <div className="call-to-action">
              <h2>Your new favorite recipe is just one click away!</h2>
              <div className="search-container">
                <input type="text" onChange={this.handleInput} />
                <button onClick={this.handleSubmit}>Search</button>
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="search-page">
          <img
            className="hero"
            src="https://res.cloudinary.com/grohealth/image/upload/c_fill,f_auto,fl_lossy,h_650,q_auto,w_1085,x_0,y_0/v1583843120/DCUK/Content/Surprisingly-High-Carb-Food.png"
          />
          <div className="call-to-action">
            <h2>Your new favorite recipe is just one click away!</h2>
            <div className="search-container">
              <input type="text" onChange={this.handleInput} />
              <button onClick={this.handleSubmit}>Search</button>
            </div>
          </div>
          <div className="recipe-list">
            <p>Loading...</p>
          </div>
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
  changeMainState,
  updateSearchTerm,
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default MainContainer;
