import MovieCard from "./MovieCard";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteMovie,
  setVisibilityFilter,
  selected,
  editMovie
} from "../actions/actionCreators";
import { SHOW_ALL, SHOW_TITLE } from "../actions/actionTypes";
import { bindActionCreators } from "redux";
import AddComponent from "./AddComponent";
import ModalComponent from "./ModalComponent";
import StarRatings from "react-star-ratings";
import { Route } from "react-router-dom";
import MovieDescription from "../containers/MovieDescription.js";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Axios from "axios";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      inputValue: "",
      inputRating: 0,
      requiredItem: 0
    };
  }

  replaceModalItem = index => {
    this.setState({
      requiredItem: index
    });
    selected(this.state.requiredItem);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      movies: nextProps.movies
    });
  }

  //updating the store props

  onInputChange = event => {
    var _ = require("lodash");
    if (this.state.inputValue.length !== 0) {
      let newMovies = _.filter(this.props.movies, movie =>
        movie.original_title.toLowerCase().includes(event.target.value.toLowerCase())
      );

      this.setState({
        inputValue: event.target.value,
        movies: newMovies
      });
    } else {
      let newMovies = _.filter(
        this.props.movies,
        movie => movie.vote_average >= this.state.inputRating
      );

      this.setState({
        inputValue: event.target.value,
        movies: newMovies
      });
    }
  };

  updateInputValue = evt => {
    this.setState({
      inputValue: evt.target.value
    });
  };

  updatedMovies = array => {
    this.setState({
      movies: array
    });
  };

  changeRatingSearch = newRating => {
    this.setState({
      inputRating: newRating
    });
  };

  render() {
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.movies[requiredItem];

    return (
      <div className="all">
        <div className="inputs">
          <div className="col-6">
            <div className="input-group">
              <input
                className="form-control border-secondary py-2"
                type="search"
                value={this.state.inputValue}
                onChange={this.onInputChange}
              ></input>
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.onInputChange}
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-5">
            <div className="input-group">
              <StarRatings
                rating={this.state.inputRating}
                changeRating={this.changeRatingSearch}
                starDimension="17px"
                numberOfStars={10}
                starSpacing="1px"
              />
            </div>
          </div>
        </div>

        <div className="MovieContainer">
          {this.state.movies.map((element, i) => {
            return (
              <MovieCard
                title={element.original_title}
                description={element.overview}
                image={element.poster_path}
                rating={element.vote_average}
                key={element.id}
                id={element.id}
                editMovie={this.props.editMovie}
                replaceModalItem={this.replaceModalItem}
              />
            );
          })}

          <AddComponent />
        </div>
        <ModalComponent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies, item: state.item };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteMovie,

      selected
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent);
