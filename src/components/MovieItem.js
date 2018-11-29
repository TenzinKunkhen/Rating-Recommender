import React from 'react';
import './MovieItem.css';
import { Rating } from 'semantic-ui-react';
import axios from 'axios';


class MovieItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: this.props.movie.vote_average / 2,
            title: this.props.movie.title,
            username: this.props.username,
            movieID: this.props.movie.id
        };

        this.onStarClick = this.onStarClick.bind(this);

    }
    

    onStarClick(event, data) {
        this.setState({rating: data.rating, title: this.props.movie.title, movieID:this.props.movie.id})

      }

    componentDidMount() {
        console.log(this.props.movie);
    }
    
      componentDidUpdate() {
          console.log(this.state.rating);
          axios.post('/rateMovie/setRating', {
            username: this.state.username,
            rating: this.state.rating,
            title: this.state.title,
            movieID: this.state.movieID
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
                        onRate={this.onStarClick}
                        defaultRating={this.props.movie.vote_average/2}
                        index={this.props.movie.id}
                    />
                    <p>Public rating: {this.props.movie.vote_average/2}</p>
            </div>
        </div>
    );
    }
};

export default MovieItem;