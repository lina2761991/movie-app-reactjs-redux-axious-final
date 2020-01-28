import StarRatings from "react-star-ratings";
import { Route, NavLink } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { editMovie, selected, deleteMovie } from "../actions/actionCreators";

import { SHOW_ALL } from "../actions/actionTypes";
import { bindActionCreators } from "redux";
import ModalComponent from "./ModalComponent";
import MovieDescription from "./MovieDescription.js";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class MovieCard extends React.Component {
  submit = () => {
    confirmAlert({
      title: "Confirm Delete",
      message: "Are you sure you want to delete this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.deleteMovie(this.props.id)
        },
        {
          label: "No",

          onClick: () => onclose
        }
      ]
    });
  };

  render() {
    return (
      <div className="movie-card card">
        <Route
          path={`/moviedescription/${this.props.id}`}
          component={MovieDescription}
        />
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>

          <p className="card-subtitle mb-2 text-muted">{this.props.year}</p>
          <StarRatings
            rating={this.props.rating}
            starDimension="17px"
            numberOfStars={10}
            starSpacing="1px"
          />
        </div>
        <div className="card-footer">
          <div className="mt-1">
            <NavLink to={`/moviedescription/${this.props.id}`}>
              <button
                onClick={() => this.props.selected(this.props)}
                id="descriptionButton"
              >
                Movie Description
              </button>
            </NavLink>
          </div>

          <div className="card-footer-badge ">
            <NavLink to="/home/EditMovie">
              <button
                id="editButton"
                data-toggle="modal"
                data-target="#exampleModal1"
                onClick={() => {
                  this.props.selected(this.props);
                }}
              >
                Edit
              </button>
            </NavLink>
            <button onClick={this.submit} id="removeButton">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      editMovie,
      selected,
      deleteMovie
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
