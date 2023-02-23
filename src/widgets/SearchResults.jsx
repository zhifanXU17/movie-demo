import useSWR from "swr";
import { APIKEY, fetcher } from "../utils/index.js";

const SearchResults = ({ searchTerm, setMovieId }) => {
  const searchENTPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchTerm}&language=zh-CN`;
  const { data, error } = useSWR(searchENTPOINT, fetcher);

  const isLoading = !data && !error;

  const handleClick = (result) => {
    setMovieId(result.id);
    localStorage.setItem("movieId", JSON.stringify(result.id));
  };

  if (isLoading) {
    return <div className="w-full bg-black text-sm p-3">Loading...</div>;
  }

  return (
    <ul className="absolute w-full max-w-xl">
      {data.results.map((result) => (
        <li
          className="w-full bg-black text-sm p-3 hover:text-black hover:cursor-pointer hover:bg-[#00FC87]"
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
