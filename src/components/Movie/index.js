import './movie.css'
import { IoCloseCircleSharp } from "react-icons/io5";


    const Movie = ({primaryColor, backgroundColor, name, rating, category, image, deleteMovie,id}) => {
        
        return (
          <div className="movie">
            <header style={{ backgroundColor: primaryColor }}>
              <div className='delete'>
                <IoCloseCircleSharp size={30} onClick={() => deleteMovie(id)} />
              </div>
              <img src={image} alt={name} />
            </header>

            <footer>
              <h4>{name}</h4>
              <div className="nota">
                <label style={{ borderColor: primaryColor }}>
                  <p> Nota: </p>
                  <h5>{rating * 2}</h5>
                </label>
              </div>
            </footer>
          </div>
        );
    }

    export default Movie;