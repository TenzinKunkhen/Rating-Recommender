import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import RecommendedList from './RecommendedList';



class Home extends React.Component {
    state = { movies: [], selectedMovie: null, username: this.props.username };

    onSearchSubmit = async (term) => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5ea2ebc7fdf47f11a122485b65cbd0fa&language=en-US&query=${term}&page=1&include_adult=true}`,
            { params: { query: term }, });

        //response.results
        this.setState({ movies: response.data.results })
    }

    onMovieSelect = (movie) => {
        this.setState({ selectedMovie: movie });

    };


    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.movies.length} movies
            
                <p>Welcome to the search bar: {this.state.username} !</p>
               <h1> Your movie List:</h1>
               <MovieList movies={this.state.movies} username={this.state.username}></MovieList>
               
               <div className="ui container">
               <h1>Your Recommended List:</h1>
                <RecommendedList movies={this.state.movies} username={this.state.username}/>
               </div>
              
            </div>
        );
    }
}

export default Home;

