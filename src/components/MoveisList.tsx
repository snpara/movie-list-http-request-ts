import Movie, { MovieProps, MovieType } from "./Movie";

import styles from "./MovieList.module.css";

interface MovieListProps {
  movies: MovieType[];
}

const MovieList: React.FC<MovieListProps> = (props) => {
  return (
    <ul className={styles["movie-list"]}>
      {props.movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
