import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({
  title,
  year,
  image,
  date_uploaded,
  genres,
  rating,
  language,
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt="movie cover image"
        width={200}
        height={200}
        unoptimized
       
      />
      <div className={styles.rating}>{rating}</div>

      <div className={styles.cardContainer}>
        <p>{title}</p>
        <p>{year}</p>
        <p>{date_uploaded}</p>
        <p>{language}</p>
        <ul>
          {genres.map((genre, index) => {
            return <li key={index}>{genre}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
