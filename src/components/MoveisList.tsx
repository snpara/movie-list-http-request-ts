import Movie, { MovieProps } from "./Movie";

import styles from "./MovieList.module.css";

interface MovieListProps {
  movies: MovieProps[];
}

const MovieList: React.FC<MovieListProps> = (props) => {
  return (
    <ul className={styles["movie-list"]}>
      {props.movies.map((movie: MovieProps) => (
        <Movie
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
