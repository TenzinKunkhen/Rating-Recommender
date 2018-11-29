import React from 'react';
import './MovieItem.css';
import { Rating } from 'semantic-ui-react';
import axios from 'axios';


class RecommendedItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movieTitle: this.props.movie.title,
            username: this.props.username,
            movieID: this.props.movie.movieID,
            movieRating: this.props.rating

        };

    }
    componentDidMount() {
        console.log(this.props.movie);
    }


      render() {

    return (
        <div className="movie-item item">
            <img className="ui image" src={`http://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`} />
            <div className="content">
                <div className="header"> 
                {this.props.movie.title} 
                <div>
                    <h3> Rated BY: </h3>
                {this.props.movie.username}
                <br></br>
                With the rating:
                {this.props.movie.rating}
                </div>
             
                </div>

                    <p>Public rating: {this.props.movie.vote_average/2}</p>
            </div>
        </div>
    );
    }
};

export default RecommendedItem;