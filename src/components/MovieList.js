import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({movies, username}) => {
  const renderedList = movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} username={username}/>
    });
    return (
       <div className="ui relaxed divided list"> {renderedList}
       </div>
    );
}

export default MovieList;