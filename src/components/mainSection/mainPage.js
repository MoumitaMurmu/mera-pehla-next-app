"use client"

import Image from "next/image";
import movieImg from '../../../public/movieAnime.png'
import styles from './main.module.css'
import { useRouter } from "next/navigation";


const Main = () => {

  const router = useRouter();


  return (
    <main className={styles.main}>
      <h2>WELCOME</h2>
      <div>
        <button onClick={()=> router.push('/movie')}>Explore Movies</button>
      </div>
    </main>
  );
};

export default Main;
