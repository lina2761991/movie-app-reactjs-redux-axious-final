import React, { Component } from "react";
import { connect } from "react-redux";
import image from "./add.png";
import StarRatings from "react-star-ratings";
import { addMovie } from "../actions/actionCreators";

import { bindActionCreators } from "redux";
import { Link, NavLink } from "react-router-dom";

class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputDesc: "",
      inputImage: "",
      rating: 0,
      file: null
    };
  }
  changeRating = newRating => {
    this.setState({
      rating: newRating
    });
  };
  updateInputName = evt => {
    this.setState({
      inputName: evt.target.value
    });
  };

  updateInputDesc = evt => {
    this.setState({
      inputDesc: evt.target.value
    });
  };

  updateInputImage = evt => {
    this.setState({
      inputImage: evt.target.value
    });
  };

  add = e => {
    this.props.addMovie(
      this.state.inputName,
      this.state.inputDesc,
      this.state.inputImage,
      this.state.rating
    );
    this.setState({ inputName: "" });
    this.setState({ inputDesc: "" });
    this.setState({ inputImage: "" });
    this.setState({ rating: 0 });
  };

  onChangeHandler = event => {
    this.setState({
      inputImage: event.target.files[0].name
    });

    console.log(this.state.file);
  };

  render() {
    return (
      <div className="AddContainer">
        <div className="movie-card">
          <img src={image} className="logo" alt="..." />

          <div className="card-body">
            <NavLink to="/home/addMovie">
              <button
                id="button1"
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@getbootstrap"
              >
                ADD NEW MOVIE
              </button>
            </NavLink>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      New movie
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Name:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          value={this.state.inputName}
                          onChange={this.updateInputName}
                        ></input>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="message-text"
                          className="col-form-label"
                        >
                          Description:
                        </label>
                        <textarea
                          className="form-control"
                          id="message-text"
                          value={this.state.inputDesc}
                          onChange={this.updateInputDesc}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Image:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          value={this.state.inputImage}
                          onChange={this.updateInputImage}
                        ></input>
                      </div>

                      <div className="form-group">
                        <label
                          htmlFor="recipient-name"
                          className="col-form-label"
                        >
                          Rating:
                        </label>
                        <StarRatings
                          rating={this.state.rating}
                          changeRating={this.changeRating}
                          starDimension="17px"
                          numberOfStars={10}
                          starSpacing="1px"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <NavLink to="/home">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.add}
                      >
                        Add movie
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addMovie
    },
    dispatch
  );
};

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);
