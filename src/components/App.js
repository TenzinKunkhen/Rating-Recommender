import React from 'react';
import unsplash from '../api/movieDB';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {
    state = { movies: [] };

     onSearchSubmit = async (term) => {
       const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5ea2ebc7fdf47f11a122485b65cbd0fa&language=en-US&query=${term}&page=1&include_adult=true}`,
            { params: { query: term }, });
            this.setState({ movies: response.data.results });
            console.log(response);
    }

    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.movies.length} movies
            </div>
        );
    }
}

export default App;

