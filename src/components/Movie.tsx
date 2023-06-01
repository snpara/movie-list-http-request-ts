import styles from "./Movie.module.css";

export interface MovieProps {
  id: number;
  title: string;
  releaseDate: string;
  openingText: string;
}

const Movie: React.FC<MovieProps> = (props) => {
  return (
    <li className={styles["movie"]}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
