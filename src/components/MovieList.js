import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({movies, username}) => {
  const renderedList = movies.map((movie) => {
        return <MovieItem movie={movie} username={username}/>
    });
    return (
       <div className="ui relaxed divided list"> {renderedList}
             <div><p>Now youre in MovieList ! {username}</p></div>  

       </div>
    );
}

export default MovieList;