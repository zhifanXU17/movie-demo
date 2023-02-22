import useSWR from "swr";
import styles from "./SearchResult.module.css";
import {APIKEY, fetcher} from "../utils/index.js";

const SearchResults = ({ searchTerm, setMovieId }) => {
  const searchENTPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchTerm}&language=zh`;
  const { data, error } = useSWR(searchENTPOINT, fetcher);

  const isLoading = !data && !error;

  const handleClick = (result) => {
    setMovieId(result.id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="absolute w-full max-w-xl">
      {data.results.map((result) => (
        <li
          className={styles.movieItem}
          key={result.id}
          onClick={() => handleClick(result)}
        >
          {result.original_title}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
