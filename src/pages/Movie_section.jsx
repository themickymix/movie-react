import { useState, useEffect } from "react";
import Cardtemp from "../component/Cardtemp";
import { options } from "../../constant";
function MovieSec() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movie data
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
     options
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results); // Set movies state with the results
      })
      .catch((err) => console.error(err));
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4 p-5">
      {movies.map((movie) => (
        <Cardtemp
          key={movie.id}
          title={movie.title}
          img={`https://image.tmdb.org/t/p/original${movie.poster_path}`} // Construct image URL
        />
      ))}
    </div>
  );
}

export default MovieSec;
