import React, { useEffect, useState } from "react";
import Cardtemp from "../component/Cardtemp";
import { options } from "../../constant";

function Trending() {
  const [tren, setTrend] = useState([]); // Correct state variable

  useEffect(() => {
    // Fetch trending data
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US", // Corrected API endpoint for trending data
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setTrend(data.results); // Set trending state with the results
      })
      .catch((err) => console.error(err));
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4 p-5">
      {tren.map((trend) => (
        <Cardtemp
          key={trend.id}
          // Use 'title' for movies and 'name' for TV shows
          title={trend.title || trend.name}
          // Provide a fallback if poster_path is null
          img={
            trend.poster_path
              ? `https://image.tmdb.org/t/p/original${trend.poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Image" // Placeholder image for missing posters
          }
        />
      ))}
    </div>
  );
}

export default Trending;
