import React from "react";
import "./styles.css";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      price: 199,
      rating: 8.5,
      stars: 0,
      fav: false,
      isInCart: false,
    };
  }

  addStars = () => {
    if (this.state.stars >= 5) {
      return;
    }

    this.setState((prevState) => ({
      stars: prevState.stars + 0.5,
    }));
  };

  subStars = () => {
    if (this.state.stars <= 0) {
      return;
    }

    this.setState((prevState) => ({
      stars: prevState.stars - 0.5,
    }));
  };

  handlefav = () => {
    this.setState((prevState) => ({
      fav: !prevState.fav,
    }));
  };

  handleAddToCart = () => {
    this.setState((prevState) => ({
      isInCart: !prevState.isInCart,
    }));
  };

  render() {
    const { title, plot, price, rating, stars, fav, isInCart } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          {/* Left side of the card */}
          <div className="left">
            <img
              alt="poster"
              src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            />
          </div>

          {/* Right side of the card */}
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="Decrease"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  onClick={this.subStars}
                />
                <img
                  className="stars"
                  alt="stars"
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                  onClick={this.addStars}
                />
                <span className="starCount">{stars}</span>
              </div>

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={this.handlefav}
              >
                {fav ? "Unfavourite" : "favourite"}
              </button>
              <button
                className={isInCart ? "unfavourite-btn" : "cart-btn"}
                onClick={this.handleAddToCart}
              >
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
