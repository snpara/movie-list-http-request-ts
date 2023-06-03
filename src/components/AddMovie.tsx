import { ChangeEvent, useRef } from "react";

import styles from "./AddMovie.module.css";
import { MovieType } from "./Movie";

interface AddMovieProps {
  onAddMovie: (movie: MovieType) => void;
}

const AddMovie: React.FC<AddMovieProps> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const movie: MovieType = {
      title: titleRef.current!.value,
      openingText: openingTextRef.current!.value,
      releaseDate: releaseDateRef.current!.value,
    };

    props.onAddMovie(movie);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["control"]}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={styles["control"]}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={styles["control"]}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
