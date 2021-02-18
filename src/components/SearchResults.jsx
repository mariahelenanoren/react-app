import "../css/SearchResults.css";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";
import ApiKey from "./ApiKey";
import { updateSearchTerm } from "../actions";

import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoaded: false,
      error: "",
      recipesHaveMounted: false,
    };

    this.searchTerm = this.props.searchTerm;
    this.recipeResults = [];

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRecipies = this.getRecipies.bind(this);
  }

  componentDidMount() {
    this.getRecipies();
  }

  getRecipies() {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?" +
        ApiKey() +
        "&query=" +
        this.searchTerm
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
      this.recipeResults = [];
      if (this.state.data.totalResults <= 10) {
        for (let i = 0; i < this.state.data.totalResults; i++) {
          let recipe = {
            title: this.state.data.results[i].title,
            img: this.state.data.results[i].image,
            id: this.state.data.results[i].id,
          };
          this.recipeResults.push(recipe);
        }
      } else {
        for (let i = 0; i < 10; i++) {
          let recipe = {
            title: this.state.data.results[i].title,
            img: this.state.data.results[i].image,
            id: this.state.data.results[i].id,
          };
          this.recipeResults.push(recipe);
        }
      }
      this.setState({
        recipesHaveMounted: true,
      });
    }
  }

  handleInput(event) {
    this.searchTerm = event.target.value;
  }

  handleSubmit() {
    this.props.updateSearchTerm(this.searchTerm);
    this.setState({
      recipesHaveMounted: false,
    });
    this.getRecipies();
  }

  render() {
    const { isLoaded, error, recipesHaveMounted } = this.state;
    if (isLoaded) {
      if (!error && recipesHaveMounted) {
        const recipeList = this.recipeResults.map((recipes) => (
          <RecipeCard items={recipes} key={recipes.id} />
        ));

        return (
          <div className="results-page">
            <div className="search-container-sm">
              <input type="text" onChange={this.handleInput} />
              <button onClick={this.handleSubmit}>Search</button>
            </div>
            <div className="search-meta">
              <p>Search results for: "{this.props.searchTerm}"</p>
              <p>{this.state.data.totalResults} results</p>
            </div>
            <div className="recipe-list">{recipeList}</div>
          </div>
        );
      } else {
        return (
          <div className="results-page">
            <p>{error}</p>
          </div>
        );
      }
    } else {
      return (
        <div className="results-page">
          <p>Loading...</p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    mainState: state.mainState,
    searchTerm: state.searchTerm,
  };
}

const mapDispatchToProps = {
  updateSearchTerm,
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default MainContainer;
