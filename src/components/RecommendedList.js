import React from 'react';
import axios from 'axios';

class RecommendedList extends React.Component {
    state = { movies: [] }

  
   componentDidMount() {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5ea2ebc7fdf47f11a122485b65cbd0fa&language=en-US&page=1')
    .then(res => {
        console.log(res.data);
    })
   }

    render() {
        
    return( 
        <div>
            
        </div>
    );
    }
};

export default RecommendedList;