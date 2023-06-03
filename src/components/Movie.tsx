import styles from "./Movie.module.css";

export type MovieType = {
  title: string;
  releaseDate: string;
  openingText: string;
  id?: string;
};

export interface MovieProps {
  movie: MovieType;
}

const Movie: React.FC<MovieProps> = (props) => {
  return (
    <li className={styles["movie"]}>
      <h2>{props.movie.title}</h2>
      <h3>{props.movie.releaseDate}</h3>
      <p>{props.movie.openingText}</p>
    </li>
  );
};

export default Movie;
