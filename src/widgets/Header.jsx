import { useState } from "react";
import logo from "../assets/tmdb.svg";
import styles from "./Header.module.css";
import SearchResults from "./SearchResults";

const Header = ({ setMovieId }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);

  function handleSearch(term) {
    setSearchTerm(term);

    if (showResults === false) {
      setShowResults(true);
    }
    if (showResults === true && term === '') {
      setShowResults( false)
    }
  }

  return (
    <header className="w-full my-6 flex justify-between">
      <a className="flex-1 px-4" href="./" title="TMDB Movie Search">
        <img className="max-w-8.75" src={logo} alt="TMDB Logo" />
      </a>

      <div className="max-w-xl w-full text-white">
        <form className="relative">
          <input
            className={styles.searchInput}
            type="text"
            value={searchTerm}
            placeholder="搜索电影名称"
            onChange={(e) => handleSearch(e.target.value.trim())}
          />
          {showResults && (
            <SearchResults searchTerm={searchTerm} setMovieId={setMovieId} />
          )}
        </form>
      </div>
    </header>
  );
};

export default Header;
