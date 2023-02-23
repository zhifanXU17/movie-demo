const Movie = ({
  posterLink,
  title,
  tagline,
  overview,
  genresList,
  producerList,
  releaseDate,
  runningTime,
  boxOffice,
  vote,
}) => {
  const genres = genresList
    .map((genre) => {
      return genre.name;
    })
    .join("，");
  const producers = producerList
    .map((producer) => {
      return producer.name;
    })
    .join("，");

  return (
    <div className="max-w-5xl mx-auto flex flex-wrap p-3 animate-fadeInDown sm:p-0 sm:flex-nowrap sm:mt-4">
      <div className="p-6 text-sm bg-transparentBlack rounded-t-lg sm:w-7/12 sm:rounded-r-lg">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <span className="pb-1.5 text-main">{tagline}</span>
        <p className="mb-4">{overview}</p>
        <p className="mt-8 text-main">{genres}</p>
        <p className="mb-4">{producers}</p>

        <div className="py-4 flex flex-wrap gap-y-4">
          <div className="basis-1/2">
            <h4>上映时间</h4>
            <span className="text-xl text-main">{releaseDate}</span>
          </div>
          <div className="basis-1/2">
            <h4>影片时长</h4>
            <span className="text-xl text-main">{runningTime} mins</span>
          </div>
          <div className="basis-1/2">
            <h4>电影票房</h4>
            <span className="text-xl text-main">
              {boxOffice ? "$" + boxOffice.toLocaleString() : "-"}
            </span>
          </div>
          <div className="basis-1/2">
            <h4>电影分数</h4>
            <span className="text-xl text-main">{vote}/10</span>
          </div>
        </div>
      </div>

      <img
        className="rounded-b-lg sm:w-5/12 sm:rounded-l-lg sm:order-first"
        src={`https://image.tmdb.org/t/p/w500/${posterLink}`}
        alt="movie poster"
      />
    </div>
  );
};

export default Movie;
