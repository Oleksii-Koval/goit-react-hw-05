import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies = [] }) {
  const location = useLocation();

  return (
    <ul className={css.ul}>
      {movies.map((item) => (
        <li key={item.id}>
          <Link to={{ pathname: `/movies/${item.id}`, state: location.state }}>
            {item.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
