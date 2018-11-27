import React from 'react';
import './MovieItem.css';
import { Rating } from 'semantic-ui-react'

const posterLink = "http://image.tmdb.org/t/p/w185";

function handleOnRate(event, data) {
    let name = data;
    console.log(name);
};

class MovieItem  extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    onStarClick(event, data) {
        console.log(data.rating);
      }

      render() {

    return (
        <div className="movie-item item">
            <img className="ui image" src={`http://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`} />
            <div className="content">
                <div className="header"> {this.props.movie.title} </div>
                <div>
                    <Rating icon="star"
                        maxRating={5}
                        onRate={this.onStarClick.bind(this)}
                    />
                </div>
            </div>
        </div>
    );
    }
};

export default MovieItem;