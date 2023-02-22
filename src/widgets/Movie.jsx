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
  const fontColor = "#00FC87";
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
    <div className="w-full flex">
      <div className="flex-1">
        <img
          className=" rounded-l-lg"
          src={`https://image.tmdb.org/t/p/w500/${posterLink}`}
          alt="movie poster rounded"
        />
      </div>

      <div
        className="p-6 max-w-xl w-full rounded-r-lg"
        style={{ backgroundColor: "rgba(0,0,0,.85)" }}
      >
        <h1 className="text-5xl font-bold mb-2">{title}</h1>
        <span className="text-xl pb-1.5" style={{ color: fontColor }}>
          {tagline}
        </span>
        <p className="mb-4">{overview}</p>
        <p className="text-xl" style={{ color: fontColor }}>
          {genres}
        </p>
        <p className="mb-4">{producers}</p>

        <div className="flex flex-wrap gap-y-4">
          <div className="basis-1/2">
            <h4>上映时间</h4>
            <span style={{ color: fontColor }}>{releaseDate}</span>
          </div>
          <div className="basis-1/2">
            <h4>影片时长</h4>
            <span style={{ color: fontColor }}>{runningTime} mins</span>
          </div>
          <div className="basis-1/2">
            <h4>电影票房</h4>
            <span style={{ color: fontColor }}>
              ${boxOffice.toLocaleString()}
            </span>
          </div>
          <div className="basis-1/2">
            <h4>电影分数</h4>
            <span style={{ color: fontColor }}>{vote}/10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
