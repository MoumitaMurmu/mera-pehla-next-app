import Card from "@/components/card/Card";
import styles from "./movie.module.css";
import Image from "next/image";

const Movie = async () => {
  const url = process.env.RAPID_KEY;

  // const url = 'https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=20&page=1&quality=all&genre=all&minimum_rating=0&query_term=0&sort_by=date_added&order_by=desc&with_rt_ratings=false';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '20ba735cdfmsh4f55d248fe4e537p1b6672jsne1a681629de5',
      'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  const data = await response.json();
  // console.log("Netflix Response ==> ", data);
  const movies = data.data.movies;
  console.log("Movies ==> ", movies);
 

  return (
  
    <div className={styles.movieMain}>
      <h1>Netflix Movies</h1>
    

<div className={styles.container}>
        {
          movies.map((movie)=>(
            <Card 
            key={movie.id}
            title={movie.title}
            year={movie.year}
            date_uploaded={movie.date_uploaded}
            genres={movie.genres}
            image={movie.large_cover_image}
            language={movie.language}
            rating={movie.rating}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Movie;
