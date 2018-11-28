import React from 'react';
import './MovieItem.css';
import { Rating } from 'semantic-ui-react';
import axios from 'axios';

const posterLink = "http://image.tmdb.org/t/p/w185";

function handleOnRate(event, data) {
    let name = data;
};

class MovieItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: this.props.movie.vote_average / 2,
            movieTitle: this.props.movie.title
        };
    }


    onStarClick(event, data) {
        this.setState({rating: data.rating, movieTitle: this.props.movie.title})

        axios.post('/rateMovie/setRating', {
                username: 'abc',
                rating: this.state.rating,
                movieTitle: this.state.movieTitle
            })
            .then(response => {
                console.log('rating response:')
                console.log(response)
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
      }

      render() {

    return (
        <div className="movie-item item">
            <img className="ui image" src={`http://image.tmdb.org/t/p/w185${this.props.movie.poster_path}`} />
            <div className="content">
                <div className="header"> {this.props.movie.title} </div>
                <Rating icon="star"
                        maxRating={5}
                        onRate={this.onStarClick.bind(this)}
                        defaultRating={this.props.movie.vote_average/2}
                    />
                    <p>Public rating: {this.props.movie.vote_average/2}</p>
            </div>
        </div>
    );
    }
};

export default MovieItem;