import { useState } from 'react';
import Banner from './components/Banner/'
import Category from './components/Category';
import Form from './components/Form/'
import Footer from './components/Footer';
import { v4 as uuidv4 } from "uuid";




function App() {
const categories = [
  {
    nameCategory: "Ação",
    primaryColor: "#092116", // Substituído por tom de laranja/peach (forte)
    backgroundColor: "#E6FFEC", // Substituído por verde claro/pastel
  },
  {
    nameCategory: "Comédia",
    primaryColor: "#FFC300", // Substituído por amarelo forte
    backgroundColor: "#FFE6B3", // Substituído por amarelo claro/pastel
  },
  {
    nameCategory: "Drama",
    primaryColor: "#800000", // Substituído por marrom escuro
    backgroundColor: "#FFDAB3", // Substituído por pêssego claro/pastel
  },
  {
    nameCategory: "Ficção Científica",
    primaryColor: "#8A2BE2", // Substituído por azul violeta escuro
    backgroundColor: "#E6E6FA", // Substituído por azul claro/pastel
  },
  {
    nameCategory: "Fantasia",
    primaryColor: "#4CAF50", // Substituído por verde intenso
  },
  {
    nameCategory: "Horror",
    primaryColor: "#800000", // Substituído por marrom escuro
  },
  {
    nameCategory: "Romance",
    primaryColor: "#FF5733", // Substituído por tom de laranja/peach (forte)
  },
  {
    nameCategory: "Thriller/Suspense",
    primaryColor: "#800000", // Substituído por marrom escuro
  },
  {
    nameCategory: "Anime",
    primaryColor: "#8A2BE2", // Substituído por azul violeta escuro
  },
];


const initialMovies = [
  {
    id: uuidv4(),
    valueFieldName: "O tempo com você",
    valueFieldImage:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRPJOkUHeyiw_KO9MATJXet17z994MRLUG2D8D8MEmqkYEXi4wP",
    valueDropdowList: "Anime",
    valueRating: "5",
  },
  {
    id: uuidv4(),
    valueFieldName: "Your Name",
    valueFieldImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd9STc3gksJk6A5XLDyfjs1ZgazEuLvMu4K2kA2LbdoPumS3Jz",
    valueDropdowList: "Anime",
    valueRating: "5",
  },
  {
    id: uuidv4(),
    valueFieldName: "Meu Amigo Totoro",
    valueFieldImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZish2n99p_FbSsSv5zNzK0X3clcQhQmC1Zimm-HAtDQiYod7",
    valueDropdowList: "Anime",
    valueRating: "4",
  },
  {
    id: uuidv4(),
    valueFieldName: "Busca Implacável",
    valueFieldImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKoBOVvZjTwYCaUWWwfuI_IBrkKo9l-JsbGI0qGkcYYv3avkB",
    valueDropdowList: "Ação",
    valueRating: "4",
  },
  {
    id: uuidv4(),
    valueFieldName: "Velozes e Furiosos",
    valueFieldImage:
      "https://br.web.img2.acsta.net/pictures/23/05/16/22/53/0156803.jpg",
    valueDropdowList: "Ação",
    valueRating: "4",
  },
  {
    id: uuidv4(),
    valueFieldName: "Tropa de Elite 2: O Inimigo Agora é Outro",
    valueFieldImage:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR58evDjPxwoszxQecrmPwFPjrjFN5b-al7nSYoT0kTnZBOEcEB",
    valueDropdowList: "Ação",
    valueRating: "5",
  },
  {
    id: uuidv4(),
    valueFieldName: "Gente Grande",
    valueFieldImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3KC5CYzKSIx0aKLEL-lYfeeF7lfTqcd4nVGWOwO2IZaBzfdaz",
    valueDropdowList: "Comédia",
    valueRating: "5",
  },
  {
    id: uuidv4(),
    valueFieldName: "The Ridiculous Six",
    valueFieldImage:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR37AHh1pRtr9BkjOyzGBa-gFqNhXIOWMem8jENwnzrSVXYX-M9",
    valueDropdowList: "Comédia",
    valueRating: "3",
  },
  {
    id: uuidv4(),
    valueFieldName: "As Branquelas",
    valueFieldImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sWLqgnnMjPyRNfkk2YUCc8Q7hUs9D5n5rTjhXFCE5tLQwQhq",
    valueDropdowList: "Comédia",
    valueRating: "5",
  },
  {
    id: uuidv4(),
    valueFieldName: "Blade Runner 2049",
    valueFieldImage:
      "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg",
    valueDropdowList: "Ficção Científica",
    valueRating: "5",
  },
  {
    id: uuidv4(),
    valueFieldName: "Bird Box",
    valueFieldImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9w2xkS-uvTmHpONEB8wtiwMiLcwfjtsJYIkZkIYIw-_t57ejt",
    valueDropdowList: "Ficção Científica",
    valueRating: "4",
  },
  {
    id: uuidv4(),
    valueFieldName: "Megatubarão",
    valueFieldImage:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9zZEcPnHJrT0cBnocp5jqTIJn3AY4h8lqVjbPObeW0e7_d4Sv",
    valueDropdowList: "Ficção Científica",
    valueRating: "2",
  },
  {
    id: uuidv4(),
    valueFieldName: "A Fantástica Fábrica de Chocolate",
    valueFieldImage:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSyLzQ6BweYRK-8o0SELk2US2KMEcnNQGzp",
    valueDropdowList: "Aventura",
    valueRating: "4",
  },
  {
    id: uuidv4(),
    valueFieldName: "Annabelle",
    valueFieldImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzObK6B8bSe0c-JodoT7nVS7HFUefQa-qS_wCXNw5TfeWjyeFz",
    valueDropdowList: "Horror",
    valueRating: "2",
  },
  {
    id: uuidv4(),
    valueFieldName: "Jogos Mortais",
    valueFieldImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQG44p3HpqmT_qv6W8VwaMfiZj5ij21Gg7AyEZoN3ffPXLcAw",
    valueDropdowList: "Horror",
    valueRating: "4",
  },
  {
    id: uuidv4(),
    valueFieldName: "O Exorcista - O Devoto",
    valueFieldImage:
      "https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-exorcist-believer/images/regions/us/onesheet.jpg",
    valueDropdowList: "Horror",
    valueRating: "2",
  },
];




  const [movies, setMovies] = useState(initialMovies);

  const moviePushing = (e) => {
    setMovies([...movies, e]);
    console.log(e);
  };

  function deleteMovie(e) {
    setMovies(movies.filter((movieItem) => movieItem.id !== e))  
  }


  return (
    <div>
      <Banner />
      <Form
        movieAdded={(e) => moviePushing(e)}
        category={categories.map((category) => category.nameCategory)}
      />

      {categories.map((categoryItem) => 
        <Category
          key={categoryItem.nameCategory}
          name={categoryItem.nameCategory}
          primaryColor={categoryItem.primaryColor}
          backgroundColor={categoryItem.backgroundColor}
          moviesSended={movies.filter(movieItem => movieItem.valueDropdowList === categoryItem.nameCategory)}
          deleteMovie={(e) => deleteMovie(e)}
          
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
