import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cardtemp from "../component/Cardtemp";
import { options } from "../../constant";

const Results = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState(""); // Store query value
  const location = useLocation();

  // Function to get query parameters
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return params.get("query");
  };

  useEffect(() => {
    const fetchResults = async () => {
      const query = getQueryParams();
      setQuery(query); // Update query state
      console.log("Query:", query); // Check if the query is being retrieved

      if (query) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
              query
            )}`,
            options // Use the imported options for the fetch request
          );
          const data = await response.json();
          console.log("API Response:", data); // Check if you are receiving data
          if (data && data.results) {
            setResults(data.results); // Set results to state
          } else {
            console.error("No results found.");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchResults();
  }, [location.search]);

  return (
    <div>
      <p className="p-5 pb-0">Search Results for `{query}`</p>
      {results.length === 0 ? (
        <p>No results found for "{query}".</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {results.map((movie) => (
            <Cardtemp
              key={movie.id}
              title={movie.title || movie.name} // Handle title for movies or TV shows
              img={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image" // Fallback image
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Results;
