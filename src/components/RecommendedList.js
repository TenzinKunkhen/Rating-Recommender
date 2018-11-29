import React from 'react';
import axios from 'axios';
import RecommendedItem from './RecommendedItem';


class RecommendedList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            username: this.props.username,
            yourMovies: [],
            otherMovies: []
        };
        this.onBtnClick = this.onBtnClick.bind(this);
        }

    onBtnClick(event) {
          axios.get('/rateMovie/recommend')
        .then(response => {
            this.setState({movies: response.data})
           // console.log('Movie state', this.state.movies)

            this.state.movies.filter((movie) => {
                if(movie.username === this.state.username) {
                    var yourMovies = {
                        username: movie.username,
                        title: movie.title,
                        rating: movie.rating
                    }
                    this.setState({yourMovies: yourMovies});

                }
                if(movie.username !== this.state.username) {
                    var otherMovies = {
                        username: movie.username,
                        title: movie.title,
                        rating: movie.rating
                    }
                    this.setState({otherMovies: otherMovies});
                }
                { this.movieRatingCompare }

             })[0];

        }).catch(error => {
            console.log('Recommendation Error')
            console.log(error);
        })
       
    }
    

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5ea2ebc7fdf47f11a122485b65cbd0fa&language=en-US&page=1')
            .then(res => {
                this.setState({ movies: res.data.results });
            })
    }

    componentDidUpdate() {
    }

    movieRatingCompare() {
        if(this.state.yourMovies.title === this.state.otherMovies.title) {
            console.log('MOVIE MATCH BABYYYY')
        }
    }


    render() {
      
        const renderedList = this.state.movies.map((movie) => {
            return <RecommendedItem 
            key={movie.id} 
            movie={movie} 
            movieID={movie.movieID} 
            title={movie.title} 
            username={movie.username}
            rating={movie.rating}
            />
        });
        const movieCompare = this.movieRatingCompare()
     //   console.log('YOUR USERNAME IS',this.state.username);
        console.log('YOUR MOVIES', this.state.yourMovies);
        console.log('THEIR MOVIES', this.state.otherMovies);
        console.log(movieCompare);
        return (
            <div>
                <button onClick={this.onBtnClick}>Update Recommended</button>
                <h2>People who have watched these movies have also watched:</h2>
                <div className="ui relaxed divided list"> 
                {renderedList}

                </div>
            </div>

        );
    }
};

export default RecommendedList;