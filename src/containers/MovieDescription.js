import React, { Component } from "react";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";

class MovieDescription extends Component {
  render() {
    return (
      <div className="movie-card card center">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${this.props.item.image}`}
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.item.title}</h4>

          <p className="card-subtitle mb-2 text-muted">
            {this.props.item.year}
          </p>
          <StarRatings
            rating={this.props.item.rating}
            starDimension="17px"
            numberOfStars={10}
            starSpacing="1px"
          />
        </div>
        <div className="card-footer">{this.props.item.description}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { item: state.selectedred };
};

export default connect(mapStateToProps, null)(MovieDescription);
