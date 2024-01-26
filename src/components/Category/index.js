import { useState } from "react";
import Movie from "../Movie";
import "./category.css";
import hexToRgba from "hex-to-rgba";

const Category = ({
  name,
  primaryColor,
  backgroundColor,
  moviesSended,
  deleteMovie,
}) => {
  const [color, setColor] = useState(primaryColor);
  var colorT = hexToRgba(color, "0.3");

  return moviesSended.length > 0 ? (
    <section
      className="category"
      style={{
        backgroundImage: "url(/images/backgroundCategory.png)",
        backgroundColor: colorT,
      }}
    >
      <div className="title">
        <input
          className="input-color"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <h3 style={{ borderColor: color }}>{name}</h3>
      <div className="movies">
        {moviesSended.map((movieItem) => (
          <Movie
            key={movieItem.valueFieldName}
            primaryColor={color}
            backgroundColor={backgroundColor}
            name={movieItem.valueFieldName}
            rating={movieItem.valueRating}
            category={movieItem.valueDropdowlist}
            image={movieItem.valueFieldImage}
            id={movieItem.id}
            deleteMovie={(e) => deleteMovie(e)}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Category;
