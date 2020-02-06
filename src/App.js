import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

//기억해라 react는 너의 class component의 render method를 자동으로 실행한다는 것을.

class App extends React.Component{
  state ={
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    //https://yts-proxy.now.sh/list_movies.json
    const {data:
            {data:
             {movies}
             }
          } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    // const moviee = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    // console.log(moviee);
    this.setState({ movies, isLoading : false })
    //data의 movies를 state의 movies로 넣어주는 것, 둘의 이름이 같기 때문에
    //movies 하나만 적어도 되는 경우.
  };
  componentDidMount(){
    this.getMovies();
    
  }
  render(){
    const { isLoading, movies } = this.state;
    return( 
      <section className="container">
        {isLoading ? ( 
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div> 
          ) : (
            <div className="movies">
              {movies.map(movie=>( 
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
              />
            ))}
            </div>
          )}
      </section >
      // <section >SIBAL</section >
    )
  }
}

export default App;
