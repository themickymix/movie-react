import React, { useEffect, useState } from "react";
import Cardtemp from "../component/Cardtemp";
import { options } from "../../constant";

function TV() {
  const [tv, setTV] = useState([]); // Correct state variable

  useEffect(() => {
    // Fetch TV show data
    fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", // Corrected API endpoint for TV shows
      options
    )
      .then((res) => res.json())
      .then((data) => {
        setTV(data.results); // Set tv state with the results
      })
      .catch((err) => console.error(err));
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-2 md:p-5">
      {tv.map(
        (
          show // Use 'tv' to map through the state
        ) => (
          <Cardtemp
            key={show.id}
            title={show.name} // TV shows use 'name' instead of 'title'
            img={`https://image.tmdb.org/t/p/original${show.poster_path}`} // Construct image URL
          />
        )
      )}
    </div>
  );
}

export default TV;
