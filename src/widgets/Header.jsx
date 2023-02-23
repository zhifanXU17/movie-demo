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
    if (showResults === true && term === "") {
      setShowResults(false);
    }
  }

  return (
    <header className="max-w-5xl mx-auto sm:flex sm:justify-between sm:gap-4">
      <a
        className="flex justify-center align-middle py-2"
        href="./"
        title="TsmB Movie Search"
      >
        <img className="w-36" src={logo} alt="TMDB Logo" />
      </a>

      <div className="text-white p-4 flex align-middle animate-slideInLeft sm:p-0 sm:w-7/12">
        <form className="relative w-full ">
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
